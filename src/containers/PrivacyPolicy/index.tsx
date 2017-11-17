import {connect} from 'react-redux'
import {branch, compose} from 'recompose'
import View, {Props} from '../../components/organisms/PrivacyPolicy'
import {State} from '../../infra/redux'
import * as selectors from '../../selectors'
import branchPlaceholder from '../../components/molecules/Placeholder/branchPlaceholder'

export default compose(
  connect(
    (state: State): Props & {fetched: boolean} => {
      const page: any = selectors.page.getPageBySlug('privacypolicy')(state)
      return {
        content: page.content,
        fetched: Object.keys(page).length != 0,
        title: page.title,
      }
    }
  ),
  branchPlaceholder(
    (props: {fetched: boolean}) => props.fetched
  )
)(View)
