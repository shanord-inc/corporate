import createBrowserHistory from 'history/createBrowserHistory'
import {routerMiddleware as createRouterMiddleware} from 'react-router-redux'
import {applyMiddleware, createStore} from 'redux'
import {rootReducer, State} from './'
import * as helper from './helper'

export default function configure(initialState?: State) {
  const history = createBrowserHistory()
  const routerMiddleware = createRouterMiddleware(history)
  const middleware = [routerMiddleware]

  const composeEnhancers = helper.getComposeEnhancers()
  const enhancer = composeEnhancers(applyMiddleware(...middleware))

  const store = createStore(
    rootReducer,
    initialState!,
    enhancer
  )

  if (module.hot) {
    module.hot.accept('./', () => {
      const nextReducers = require('./').default
      store.replaceReducer(nextReducers)
    })
  }

  return {
    store: store
  }
}
