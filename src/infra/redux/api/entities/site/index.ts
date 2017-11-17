import {SiteType} from '../../../../../domain/models/Site'
import {handleActions} from '../../../helper'
import {ActionTypeKeys, ActionTypes, FetchEntityActionType} from '../../types'
import {EntitiesState} from '../index'

export const actionCreators = {
  getSite: (resource: SiteType[]): FetchEntityActionType => ({
    meta: {},
    payload: resource,
    type: ActionTypeKeys.FETCH_SITE,
  }),
}

const handlers = {
  [ActionTypeKeys.FETCH_SITE]: (state: EntitiesState, action: ActionTypes) => {
    return {...action.payload}
  },
}

const reducer = handleActions(handlers, {})
export default reducer
