import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import {Provider} from 'react-redux'
import Root from './containers/Root'
import configureRedux from './infra/redux/configure'
import ReduxProvider from './infra/redux/ReduxProvider'
import configureStyles from './styles/configureStyles'
import * as useCases from './useCases'

const rootElement = document.getElementById('root')
const redux = configureRedux()
ReduxProvider.create().setContext(redux.store)

useCases.application.init()

configureStyles()

const render = (Component: React.ComponentClass) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={redux.store}>
        <Component/>
      </Provider>
    </AppContainer>,
    rootElement
  )
}

render(Root)

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept('./containers/Root', () => {
      render(Root)
    })
  }
}
