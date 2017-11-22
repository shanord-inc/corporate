import {normalize} from 'normalizr'
import {ActionCreatorsMapObject} from 'redux'
import {IPostRepository} from '../../domain/interfaces'
import Post, {PostType} from '../../domain/models/Post'
import * as api from '../../infra/api'
import AppState from '../../services/AppState'
import {actions} from '../redux/api/entities/posts'
import * as entitiesSelectors from '../redux/api/entities/selectors'
import {actions as detailActions} from '../redux/api/postDetail'
import {PostSchema} from '../redux/api/schemata'
import ReduxProvider from '../redux/ReduxProvider'

let singleton: IPostRepository | null
export const PER_PAGE: number = 5

export default class PostRepository implements IPostRepository {
  appState: AppState
  actions: ActionCreatorsMapObject
  redux: ReduxProvider
  posts: Post[]
  _hasNext: boolean = false

  static create() {
    if (singleton) {
      return singleton
    }
    return singleton = new PostRepository()
  }


  constructor() {
    this.appState = AppState.create()
    this.redux = ReduxProvider.create()
  }

  async getById(id: string): Promise<Post> {
    const post = entitiesSelectors.getPostById(id)(this.redux.getState())
    if (post) {
      this.redux.dispatch(detailActions.fetchPostDetail(post))
      return new Post(post)
    } else {
      const res = await api.post.getPostById(id)
      const {entities: {posts}, result} = normalize(res.data, PostSchema)
      this.redux.dispatch(actions.getPosts(posts, []))
      return new Post(res.data)
    }
  }

  async get(): Promise<Post[]> {
    this.appState.setNewsPage(1)
    const res = await api.post.getPosts({per_page: PER_PAGE})

    const {entities: {posts}, result} = normalize(res.data, [PostSchema])
    this.redux.dispatch(actions.getPosts(posts, result))

    this._hasNext = res.data && res.data.length >= PER_PAGE
    const _posts: PostType[] = entitiesSelectors.getPosts(this.redux.getState())
    return _posts.map(post => {
      return new Post(post)
    })
  }

  async getNext(): Promise<Post[]> {
    const nextPage = this.appState.getNewsPage() + 1
    const res = await api.post.getPosts({per_page: PER_PAGE, page: nextPage}).catch(e => {
      this.appState.setNewsPage(-1)
      this._hasNext = false
      throw e
    })
    this._hasNext = res.data && res.data.length >= PER_PAGE

    const {entities: {posts}, result} = normalize(res.data, [PostSchema])
    this.redux.dispatch(actions.getPosts(posts, result))

    this.appState.setNewsPage(nextPage)

    const _posts: PostType[] = entitiesSelectors.getPosts(this.redux.getState())
    return _posts.map(post => {
      return new Post(post)
    })
  }

  hasNext(): boolean {
    return this._hasNext
  }
}

