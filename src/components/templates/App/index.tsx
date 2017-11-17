import * as React from 'react'
import {Route, Switch} from 'react-router-dom'
import Loading from '../../../containers/Loading'
import Toast from '../../../containers/Toast'
import routes from '../../../routes'
import Header from '../../organisms/Header'
import Layout from '../../atoms/Layout'
import LayoutMain from '../../atoms/LayoutMain'
import LayoutSide from '../../atoms/LayoutMenu'
import Menu from '../../organisms/Menu'
import MenuBtn from '../../organisms/MenuBtn/index'
import Site from '../../atoms/Site'

export default class App extends React.Component {
  render() {
    return (
      <Site>
        <Loading>
          <div>
            <MenuBtn/>
            <Header/>
            <Toast/>
            <Layout>
              <LayoutSide>
                <Menu/>
              </LayoutSide>
              <LayoutMain>
                <Switch>
                  {Object.keys(routes).map((key, index) => {
                    const route = routes[key]
                    return (
                      <Route
                        component={route.component}
                        exact={route.exact}
                        key={index}
                        path={route.path}
                      />
                    )
                  })}
                </Switch>
              </LayoutMain>
            </Layout>
          </div>
        </Loading>
      </Site>
    )
  }
}

