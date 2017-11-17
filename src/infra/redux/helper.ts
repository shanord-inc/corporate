import {AnyAction, compose, Reducer} from 'redux'

/**
 * getComposeEnhancers
 */
export function getComposeEnhancers() {
  if (process.env.NODE_ENV === 'development') {
    const KEY = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'
    if (typeof (window as any)[KEY] === 'function') {
      return (window as any)[KEY]({serialize: {options: true}})
    }
  }
  return compose
}

export function handleActions<S>(
  handlers: {[key: string]: Reducer<S>},
  initialState: S
): Reducer<S> {
  return (state: S = initialState, action: AnyAction): S => {
    const handler = handlers[action.type]
    return handler ? handler(state, action) : state
  }
}
