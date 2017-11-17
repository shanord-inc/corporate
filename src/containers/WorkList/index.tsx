import {connect} from 'react-redux'
import {compose, lifecycle} from 'recompose'
import WorkList, {Props} from '../../components/organisms/WorkList'
import {State} from '../../infra/redux'
import * as selectors from '../../selectors'
import * as useCases from '../../useCases'

export default compose(
  connect(
    (state: State): Props => {
      return {
        hasNext: selectors.work.hasNext(state),
        items: selectors.work.getWorks(state),
        onScroll: () => useCases.work.next()
      }
    }
  ),
  lifecycle({
    componentDidMount: () => {
      useCases.work.getWork()
    }
  })
)(WorkList)
