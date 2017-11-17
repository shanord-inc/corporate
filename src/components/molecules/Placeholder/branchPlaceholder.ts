import * as React from 'react'
import {branch, compose, lifecycle, ReactLifeCycleFunctionsThisArguments} from 'recompose'
import Placeholder from './'

type Test = (props: {}) => boolean

export default function branchPlaceholder(test: Test, mount?: (props: {}) => void) {
  return compose(
    lifecycle({
      componentDidMount() {
        mount && mount(this.props)
      }
    }),
    branch(
      test,
      (component: React.ComponentType<any>) => component,
      () => {
        return Placeholder
      }
    )
  )
}
