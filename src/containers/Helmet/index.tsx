import {connect} from 'react-redux'
import {compose} from 'redux'
import View, {Props} from '../../components/atoms/Helmet'
import {State} from '../../infra/redux'
import * as selectors from '../../selectors'

type OwnProps = {
  title?: string
}

export default compose(
  connect(
    (state: State, ownProps: OwnProps): Props => {
      const site = selectors.site.getSite(state)
      return {
        siteTitle: site.siteTitle,
        title: ownProps.title || '',
      }
    }
  )
)(View)
