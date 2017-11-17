import * as React from 'react'
import styled from 'styled-components'
import postContent from '../../../styles/mixins/postContent'
import PostTitle from '../../atoms/PostTitle'
import * as animations from '../../../styles/mixins/animations'

const View = styled.div`
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
  title: string
}

const PrivacyPolicy: React.SFC<{}> = (props: any) => {
  return (
    <View>
      <PostTitle dangerouslySetInnerHTML={{__html: props.title}}/>
      <Content dangerouslySetInnerHTML={{__html: props.content}}/>
    </View>
  )
}

export default PrivacyPolicy

