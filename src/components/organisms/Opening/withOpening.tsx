import * as React from 'react'
import * as PropTypes from "prop-types";
import {OpeningContextTypes} from './OpeningProvider'

export function withOpening<P, S>(ComposedComponent: React.ComponentType<OpeningContextTypes>): React.ComponentClass<P> {
  class C extends React.Component<P & OpeningContextTypes, S> {
    static contextTypes = {
      opening: PropTypes.object
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
  return C
}

export default withOpening
