import {connect} from 'react-redux'
import {compose} from 'redux'
import Button, {Props as ViewProps} from '../../components/organisms/NextButton'
import {State} from '../../infra/redux'
import * as selectors from '../../selectors'
import * as useCases from '../../useCases'

type Props = ViewProps & {
  hasNext: boolean,
  dispatch: any,
}

export default compose(
  connect(
    (state: State): Props => {
      return ({
        dispatch: {}, // FIXME: warningがでるため・・・・
        hasNext: selectors.app.getNewsPage(state) !== -1,
        onClick: () => {
          useCases.news.next()
        }
      })
    }
  )
)(Button)
