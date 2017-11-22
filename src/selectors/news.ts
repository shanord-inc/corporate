import format from 'date-fns/esm/format'
import {createSelector} from 'reselect'
import {PostType} from '../domain/models/Post'
import * as entitiesSelectors from '../infra/redux/api/entities/selectors'
import PostRepository from '../infra/repository/PostRepository'

//FIXME: newsとpostを統一
export const getNews = createSelector(
  entitiesSelectors.getPosts,
  posts => {
    return posts.map((post: any) => {
      // FIXME: モデルインスタンス化?
      return {
        content: post.content.rendered,
        date: format(Date.parse(post.date), 'YYYY/MM/DD'),
        id: post.id,
        title: post.title.rendered
      }
    })
  }
)

export const hasNext = createSelector(
  () => PostRepository.create().hasNext(),
  (hasNext): boolean => hasNext
)

export const getNewsById = (newsId: string) =>
  createSelector(
    entitiesSelectors.getPostById(newsId),
    (post: PostType) => {
      const {content = '', date = '', id = '', title = ''} = post || {}
      return {
        content: content && content.rendered,
        date: date && format(Date.parse(date), 'YYYY/MM/DD'),
        id: id,
        title: title && title.rendered
      }
    }
  )
