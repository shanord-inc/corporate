import * as React from 'react'
import Helmet from '../../../containers/Helmet'
import styled from 'styled-components'
import * as animations from '../../../styles/mixins/animations'
import postContent from '../../../styles/mixins/postContent'
import Date from '../../atoms/Date'
import PostTitle from '../../atoms/PostTitle'

const StyledNewsDetail = styled.div`
  margin-top: 80px;
  
  ${animations.fadeIn()};
`

const Content = styled.div`
  margin-top: 80px;
  font-size: 14px;
  
  ${postContent}
`

export type Props = {
  content: string
  date: string
  title: string
}

const NewsDetail: React.SFC<Props> = props => {
  return (
    <StyledNewsDetail>
      <Helmet title={props.title}/>
      <PostTitle dangerouslySetInnerHTML={{__html: props.title}}/>
      <Date>{props.date}</Date>

      <Content dangerouslySetInnerHTML={{__html: props.content}}/>
    </StyledNewsDetail>
  )
}

export default NewsDetail
