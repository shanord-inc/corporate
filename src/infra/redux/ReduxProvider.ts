import {Action, ActionCreator, ActionCreatorsMapObject, bindActionCreators} from 'redux'
import {State} from './index'
import {ReduxContext} from './types'

let singleton: ReduxProvider | null = null

export default class ReduxProvider {
  context: ReduxContext

  static create(): ReduxProvider {
    if (singleton) {
      return singleton
    }
    return (singleton = new ReduxProvider())
  }

  setContext(context: ReduxContext) {
    this.context = context
  }

  dispatch(action: Action): any {
    return this.context.dispatch(action)
  }

  getState(): State {
    if (!this.context) {
      throw new ReferenceError('context is null.')
    }
    return this.context.getState()
  }

  bind(actionCreator: ActionCreatorsMapObject): ActionCreatorsMapObject {
    return bindActionCreators(actionCreator, this.context.dispatch)
  }
}
