import * as React from 'react'
import styled from 'styled-components'
import fade from '../../../../styles/transitionGroup/fade'
import Date from '../../../atoms/Date'
import PostTitle from '../../../atoms/PostTitle'

const View = styled.div`
  margin-top: 80px;
  
  ${fade()} 
`
const Link = styled.div`
  cursor: pointer;
`

export type Props = {
  id: string,
  content: string,
  title: string,
  date: Date,
  onClick: () => void
}

export default function NewsItem(props: Props) {
  return (
    <View>
      <Link onClick={props.onClick}>
        <PostTitle dangerouslySetInnerHTML={{__html: props.title}}/>
      </Link>
      <Date>{props.date}</Date>
    </View>
  )
};
