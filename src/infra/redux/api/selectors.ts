import {createSelector} from 'reselect'
import {PostType} from '../../../domain/models/Post'
import {State} from '../index'

export const getApi = (state: State) => state.api
export const getPostsIds = (state: State) => getApi(state).posts
export const getWorksIds = (state: State) => getApi(state).works
export const getPostDetails = (state: State) => getApi(state).postDetails

export const getPostDetailById = (id: string) => createSelector(
  getPostDetails,
  (details): PostType | null => {
    return details[id]
  }
)
