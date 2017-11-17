import * as React from 'react'
import * as PropTypes from "prop-types";
import {hoistStatics} from 'recompose'

const connectMenu = <P extends {}>(ComposedComponent: React.ComponentType<any>): React.ComponentClass<P> =>
  class ConnectedComponent extends React.Component<P, {}> {
    static contextTypes = {
      menu: PropTypes.object
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.context}
        />
      )
    }
  }

export default hoistStatics(connectMenu)
