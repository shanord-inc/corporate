import {Action} from '../types'

export enum ActionTypeKeys {
  BUSY = 'app/busy',
  INITIALIZED = 'app/initialized',
  TOAST = 'app/toast',
  REMOVE_TOAST = 'app/remove_toast',
  CLEAR_TOAST = 'app/clear_toast',
  NEWS_PAGE = 'app/news_page',
  WORK_PAGE = 'app/work_page',
}

export interface AppActionType extends Action {
  type: ActionTypeKeys,
  payload: any
}

export type ActionTypes =
  | AppActionType


