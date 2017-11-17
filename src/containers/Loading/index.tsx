import {connect} from 'react-redux'
import View, {Props} from '../../components/organisms/Loading'
import {State} from '../../infra/redux'
import * as selectors from '../../selectors'

export default connect(
  (state: State): Props => ({
    isLoading: selectors.app.getLoading(state),
  })
)(View)
