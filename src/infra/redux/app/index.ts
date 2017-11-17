import {handleActions} from '../helper'
import {ActionTypeKeys, ActionTypes, AppActionType} from './types'

export const actions = {
  toBusy: (): AppActionType => ({
    payload: true,
    type: ActionTypeKeys.BUSY
  }),
  toUnbusy: (): AppActionType => ({
    payload: false,
    type: ActionTypeKeys.BUSY
  }),
  toInitialized: (): AppActionType => ({
    payload: true,
    type: ActionTypeKeys.INITIALIZED
  }),
  addToast: (message: string): AppActionType => ({
    payload: message,
    type: ActionTypeKeys.TOAST
  }),
  removeToast: (message: string): AppActionType => ({
    payload: message,
    type: ActionTypeKeys.REMOVE_TOAST
  }),
  clearToast: (message: string): AppActionType => ({
    payload: message,
    type: ActionTypeKeys.REMOVE_TOAST
  }),
  setNewsPage: (page: number): AppActionType => ({
    payload: page,
    type: ActionTypeKeys.NEWS_PAGE
  }),
  setWorkPage: (page: number): AppActionType => ({
    payload: page,
    type: ActionTypeKeys.WORK_PAGE
  })
}

export const handlers = {
  [ActionTypeKeys.BUSY]: (state: AppState, action: ActionTypes) => {
    return {...state, busy: action.payload}
  },
  [ActionTypeKeys.INITIALIZED]: (state: AppState, action: ActionTypes) => {
    return {...state, initialized: action.payload}
  },
  [ActionTypeKeys.TOAST]: (state: AppState, action: ActionTypes) => {
    return {...state, toast: [...state.toast, ...action.payload]}
  },
  [ActionTypeKeys.REMOVE_TOAST]: (state: AppState, action: ActionTypes) => {
    return {
      ...state, toast:
        [...state.toast.filter((toast: string) => toast !== action.payload)]
    }
  },
  [ActionTypeKeys.CLEAR_TOAST]: (state: AppState, action: ActionTypes) => {
    return {...state, toast: []}
  },
  [ActionTypeKeys.NEWS_PAGE]: (state: AppState, action: ActionTypes) => {
    return {...state, newsPage: action.payload}
  },
  [ActionTypeKeys.WORK_PAGE]: (state: AppState, action: ActionTypes) => {
    return {...state, workPage: action.payload}
  }
}


export type AppState = {
  readonly busy: boolean
  readonly initialized: boolean
  readonly newsPage: number
  readonly menu: boolean
  readonly toast: any[]
  readonly workPage: number
}

const initialState: AppState = {
  busy: false,
  initialized: false,
  menu: false,
  newsPage: 0,
  toast: [],
  workPage: 0
}

const reducer = handleActions(handlers, initialState)
export default reducer
