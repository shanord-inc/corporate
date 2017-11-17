import {connect} from 'react-redux'
import {compose} from 'recompose'
import ToastList, {Props} from '../../components/organisms/Toast'
import {State} from '../../infra/redux'
import * as selectors from '../../selectors'
import * as useCases from '../../useCases'
import {withRouter} from 'react-router'
import {Location} from 'history'

type OwnProps = {
  location: Location
}

export default compose(
  withRouter,
  connect(
    (state: State, ownProps: OwnProps): Props => {
      // FIXME: ページ変更時にtoastクリア
      return {
        items: selectors.app.getToast(state),
        onClickDismiss: (message: string) => {
          useCases.application.removeToast(message)
        },
      }
    }
  )
)(ToastList)
