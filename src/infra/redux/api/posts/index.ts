import {handleActions} from '../../helper'
import {ActionTypes, ActionTypeKeys} from '../types'
import {union} from 'lodash'

export type State = string[]

const handlers = {
  [ActionTypeKeys.FETCH_POSTS]: (state: State, action: ActionTypes) => {
    return union(state, action.meta.result)
  },
}

const reducer = handleActions(handlers, [])
export default reducer
