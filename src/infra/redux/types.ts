import {Dispatch} from 'redux'
import {State} from './index'

export type ReduxContext = {
  dispatch: Dispatch<State>
  getState(): State
}

export type Action = {
  type: string
  payload: {}
  meta?: {}
  error?: boolean
}
