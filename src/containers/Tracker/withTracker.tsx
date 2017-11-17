import {Location} from 'history'
import * as React from 'react'
import * as GoogleAnalytics from 'react-ga'

GoogleAnalytics.initialize('UA-101110049-1')

type Props = {
  location: Location
}

const withTracker = (WrappedComponent: React.ComponentClass<any>, options = {}) => {
  const trackPage = (page: string) => {
    GoogleAnalytics.set({
      page,
      ...options,
    })
    GoogleAnalytics.pageview(page)
  }

  const HOC = class extends React.Component<Props> {
    componentDidMount() {
      const page = this.props.location.pathname
      trackPage(page)
    }

    componentWillReceiveProps(nextProps: Props) {
      const currentPage = this.props.location.pathname
      const nextPage = nextProps.location.pathname

      if (currentPage !== nextPage) {
        trackPage(nextPage)
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return HOC
}

export default withTracker
