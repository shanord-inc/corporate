import * as React from 'react'
import {connect} from 'react-redux'
import {match, withRouter} from 'react-router'
import {compose} from 'recompose'
import NewsDetail, {Props} from '../../components/organisms/NewsDetail'
import branchPlaceholder from '../../components/molecules/Placeholder/branchPlaceholder'
import {State} from '../../infra/redux'
import * as selectors from '../../selectors'
import * as useCases from '../../useCases'

type OwnProps = {
  history: any
  match: match<{newsId: string}>
}

export default compose(
  withRouter,
  connect(
    (state: State, ownProps: OwnProps): Props & {fetched: boolean, newsId: string} => {
      const {newsId} = ownProps.match.params
      const {content, title, date} = selectors.news.getNewsById(newsId)(state)
      return {
        content,
        date,
        fetched: !!content || !!title,
        newsId,
        title,
      }
    }
  ),
  branchPlaceholder(
    (props: {fetched: boolean}) => props.fetched,
    (props: {newsId: string}) => {
      useCases.news.getNewsById(props.newsId)
    }
  )
)(NewsDetail)
