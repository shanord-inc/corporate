import {History} from 'history'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {compose, lifecycle} from 'recompose'
import News, {Props} from '../../components/organisms/News'
import {State} from '../../infra/redux'
import * as selectors from '../../selectors'
import * as useCases from '../../useCases'

type OwnProps = {
  history: History
}

export default compose(
  withRouter,
  connect(
    (state: State, ownProps: OwnProps): Props => ({
      hasNext: selectors.news.hasNext(state),
      items: selectors.news.getNews(state),
      onClick: (id: string) => {
        ownProps.history.push(`/news/${id}`)
      },
      onScroll: () => useCases.news.next()

    })
  ),
  lifecycle({
    componentDidMount: () => {
      useCases.news.getNews()
    }
  })
)
(News)
