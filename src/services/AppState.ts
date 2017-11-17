import {actions} from '../infra/redux/app'
import ReduxProvider from '../infra/redux/ReduxProvider'
import * as appSelectors from '../infra/redux/app/selectors'

let singleton: AppState | null = null

export default class AppState {
  redux: ReduxProvider

  static create(): AppState {
    if (singleton) {
      return singleton
    }
    const redux = ReduxProvider.create()
    return (singleton = new AppState(redux))
  }

  constructor(redux: ReduxProvider) {
    this.redux = redux
  }

  toBusy() {
    this.redux.dispatch(actions.toBusy())
  }

  toUnbusy() {
    this.redux.dispatch(actions.toUnbusy())
  }
  
  toInitialized() {
    this.redux.dispatch(actions.toInitialized())
  }
  
  addToast(message: string) {
    if (!message) {
      return
    }
    this.redux.dispatch(actions.addToast(message))
  }
  
  removeToast(message: string) {
    if (!message) {
      return
    }
    this.redux.dispatch(actions.removeToast(message))
  }
  
  clearToast(message: string) {
    this.redux.dispatch(actions.removeToast(message))
  }

  getNewsPage() {
    return appSelectors.getNewsPage(this.redux.getState())
  }

  setNewsPage(page: number) {
    this.redux.dispatch(actions.setNewsPage(page))
  }

  getWorkPage() {
    return appSelectors.getWorkPage(this.redux.getState())
  }

  setWorkPage(page: number) {
    this.redux.dispatch(actions.setWorkPage(page))
  }
}
