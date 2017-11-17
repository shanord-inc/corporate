import {connect} from 'react-redux'
import {lifecycle} from 'recompose'
import {compose} from 'redux'
import Page, {Props} from '../../components/organisms/Page'
import {State} from '../../infra/redux'
import * as selectors from '../../selectors'

type OwnProps = {
  title?: string
}

export default compose(
  connect(
    (state: State, ownProps: OwnProps): Props => {
      return {
        title: ownProps.title || ''
      }
    }
  ),
  lifecycle({
      componentWillMount() {
        window.scroll(0, 0)
      }
    }
  )
)(Page)
