import {WorkListType} from '../../../../../domain/models/Work'
import {handleActions} from '../../../helper'
import {ActionTypeKeys, ActionTypes, FetchEntityActionType} from '../../types'
import {EntitiesState} from '../index'

export const actions = {
  getWorks: (resource: WorkListType, result: string[]): FetchEntityActionType => ({
    meta: {
      result,
    },
    payload: resource,
    type: ActionTypeKeys.FETCH_WORKS,
  }),
}

const handlers = {
  [ActionTypeKeys.FETCH_WORKS]: (state: EntitiesState, action: ActionTypes) => {
    return {...state, ...action.payload}
  },
}

const reducer = handleActions(handlers, {})
export default reducer
