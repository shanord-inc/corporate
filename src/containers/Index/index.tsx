import {connect} from 'react-redux'
import {compose} from 'redux'
import View, {Props} from '../../components/organisms/Index'
import branchPlaceholder from '../../components/molecules/Placeholder/branchPlaceholder'
import {State} from '../../infra/redux'
import * as selectors from '../../selectors'

export default compose(
  connect(
    (state: State): Props & {fetched: boolean} => {
      const {catchphrase} = selectors.site.getSite(state)
      return {
        catchphrase,
        fetched: !!catchphrase
      }
    }
  ),
  branchPlaceholder(
    (props: {fetched: boolean}) => props.fetched
  )
)(View)
