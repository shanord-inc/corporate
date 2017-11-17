import {EntitiesState} from '..'
import {PostListType} from '../../../../../domain/models/Post'
import {handleActions} from '../../../helper'
import {ActionTypeKeys, ActionTypes, FetchEntityActionType} from '../../types'

export const actions = {
  getPosts: (resource: PostListType, result: string[]): FetchEntityActionType => ({
    meta: {
      result,
    },
    payload: resource,
    type: ActionTypeKeys.FETCH_POSTS,
  }),
}

const handlers = {
  [ActionTypeKeys.FETCH_POSTS]: (state: EntitiesState, action: ActionTypes) => {
    return {...state, ...action.payload}
  },
}

const reducer = handleActions(handlers, {})
export default reducer
