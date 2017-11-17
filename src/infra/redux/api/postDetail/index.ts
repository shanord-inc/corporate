import {PostType} from '../../../../domain/models/Post'
import {handleActions} from '../../helper'
import {ActionTypeKeys, ActionTypes, FetchEntityActionType} from '../types'
import {PostSchema} from '../schemata'

export type State = PostType[]

export const actions = {
  fetchPostDetail: (resource: PostType): FetchEntityActionType => ({
    meta: {},
    payload: resource,
    type: ActionTypeKeys.FETCH_POST_DETAILS,
  }),
}

const handlers = {
  [ActionTypeKeys.FETCH_POST_DETAILS]: (state: State, action: ActionTypes) => {
    const ret = {...state, ...{[action.payload.id]: action.payload}}
    return ret
  },
}

const reducer = handleActions(handlers, [])
export default reducer
