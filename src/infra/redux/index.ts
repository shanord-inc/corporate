import {combineReducers} from 'redux'
import {FormState, reducer as form} from 'redux-form'
import api, {APIState} from './api'
import app, {AppState} from './app'


export interface State {
  api: APIState
  app: AppState
  form: FormState & {
    contactForm: any /*FIXME: 型*/
  }
}

export const rootReducer = combineReducers<State>({
  api,
  app,
  form,
})


