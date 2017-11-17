import {connect} from 'react-redux'
import {compose} from 'redux'
import {reduxForm} from 'redux-form'
import View, {Props} from '../../components/organisms/Contact'
import {State} from '../../infra/redux'
import * as useCases from '../../useCases'

export default compose(
  connect(
    (state: State): Props => {
      return {
        handleSubmit: e => {
          e.preventDefault()
          useCases.inquiry.postContact()
          useCases.inquiry.reset('contactForm')
        }
      }
    }
  ),
  reduxForm({
    form: 'contactForm'
  })
)(View)
