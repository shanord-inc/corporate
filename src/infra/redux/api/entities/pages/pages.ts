import {PageType} from '../../../../../domain/models/Page'
import {handleActions} from '../../../helper'
import {ActionTypeKeys, ActionTypes, FetchEntityActionType} from '../../types'
import {EntitiesState} from '../index'

export const actions = {
  getPages: (resource: PageType[]): FetchEntityActionType => ({
    meta: {},
    payload: resource,
    type: ActionTypeKeys.FETCH_PAGES,
  }),
}

const handlers = {
  [ActionTypeKeys.FETCH_PAGES]: (state: EntitiesState, action: ActionTypes) => {
    return action.payload
  },
}

const reducer = handleActions(handlers, [])
export default reducer
