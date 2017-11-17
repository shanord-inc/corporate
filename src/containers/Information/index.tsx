import {connect} from 'react-redux'
import View, {Props} from '../../components/organisms/Information'
import {State} from '../../infra/redux'
import * as selectors from '../../selectors'

export default connect(
  (state: State): Props => {
    const {information} = selectors.site.getSite(state)
    return {
      information
    }
  }
)(View)
