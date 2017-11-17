import {normalize} from 'normalizr'
import {IWorkRepository} from '../../domain/interfaces'
import Work, {WorkType} from '../../domain/models/Work'
import * as api from '../../infra/api'
import AppState from '../../services/AppState'
// import {receiveGetWorks} from '../redux/api/index'
import * as entitiesSelectors from '../redux/api/entities/selectors'
import ReduxProvider from '../redux/ReduxProvider'
import {WorkSchema} from '../redux/api/schemata'
import {actions} from '../redux/api/entities/works'

let singleton: IWorkRepository | null
const PER_PAGE: number = 5

export default class WorkRepository implements IWorkRepository {
  appState: AppState
  redux: ReduxProvider
  works: Work[]
  _hasNext: boolean = false

  constructor() {
    this.redux = ReduxProvider.create()
    this.appState = AppState.create()
  }

  static create() {
    if (singleton) {
      return singleton
    }
    return singleton = new WorkRepository()
  }

  async get(): Promise<Work[]> {
    this.appState.setWorkPage(1)
    const res = await api.post.getWork({per_page: PER_PAGE})
    const {entities: {works}, result} = normalize(res.data, [WorkSchema])
    this.redux.dispatch(actions.getWorks(works, result))
    this._hasNext = res.data && res.data.length >= PER_PAGE
    const _works: WorkType[] = entitiesSelectors.getWorks(this.redux.getState())
    return _works.map(work => {
      return new Work(work)
    })
  }

  async getNext(): Promise<Work[]> {
    const nextPage = this.appState.getWorkPage() + 1
    const res = await api.post.getWork({per_page: PER_PAGE, page: nextPage}).catch(e => {
      this.appState.setWorkPage(-1)
      this._hasNext = false
      throw e
    })
    this._hasNext = res.data && res.data.length >= PER_PAGE
    const {entities: {works}, result} = normalize(res.data, [WorkSchema])
    this.redux.dispatch(actions.getWorks(works, result))
    this.appState.setWorkPage(nextPage)
    const _works: WorkType[] = entitiesSelectors.getWorks(this.redux.getState())
    return _works.map(work => {
      return new Work(work)
    })
  }

  hasNext(): boolean {
    return this._hasNext
  }
}

