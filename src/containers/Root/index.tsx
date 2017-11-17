import * as React from 'react'
import {Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import MenuProvider from '../../components/organisms/Menu/MenuProvider'
import withTracker from '../Tracker/withTracker'
import App from '../../components/templates/App'
import OpeningProvider from '../../components/organisms/Opening/OpeningProvider'

export default class Root extends React.Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <div>
        <MenuProvider>
          <OpeningProvider>
            <BrowserRouter>
              <Route component={withTracker(App, {location})}/>
            </BrowserRouter>
          </OpeningProvider>
        </MenuProvider>
      </div>
    )
  }
}

