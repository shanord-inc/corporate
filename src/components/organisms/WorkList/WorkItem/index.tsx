import * as React from 'react'
import styled from 'styled-components'
import {translateUpIn, translateUpOut} from '../../../../styles/keyframes/translate'
import animation from '../../../../styles/mixins/animation'
import transition from '../../../../styles/mixins/transition'
import fade from '../../../../styles/transitionGroup/fade'
import ease from '../../../../styles/variables/ease'
import PostTitle from '../../../atoms/PostTitle'

const View = styled.div`
  margin-top: 80px;
  
  ${fade()} 
`

const Description = styled.div`
  margin-top: 10px;
  font-size: 16px;
`
const Award = styled.div`
  margin-top: 15px;
  font-size: 14px;
`
const ThumbnailText = styled.p`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 28px;
  color: #fff;
  opacity: 0;
  ${transition({duration: 0.4})};
`
const Thumbnail = styled.a`
  opacity: 0;
  ${transition({duration: 0.5, easing: ease.easeInOutCubic})};
  overflow: hidden;
  display: block;
  position: relative;
  height: 0;
  padding-bottom: 66.1953728%;
  &::after  {
    content: '';
    position: absolute;
    top: 0;  
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    ${animation({
  duration: 0.3,
  easing: ease.easeOutCubic,
  keyframe: translateUpOut()
})};
    
    transform: translateY(-100%);
  }
  &:hover::after {
    ${animation({
  duration: 0.3,
  easing: ease.easeOutCubic,
  keyframe: translateUpIn()
})};
  }
  &:hover ${ThumbnailText} {
    opacity: 1;
  }
  margin-top: 20px;
  img {
    max-width: 100%;
    height: auto
  }
`
export type Props = {
  description: string
  thumbnail: string
  title: string
  url: string
  awards: any[]
}

export const WorkItem: React.SFC<Props> = props => {
  const awards = props.awards && props.awards.map((award: any, index) => {
    return <p key={index}>{award.title}</p>
  })
  return (
    <View>
      <PostTitle dangerouslySetInnerHTML={{__html: props.title}}/>
      <Award>
        {awards}
      </Award>
      <Description dangerouslySetInnerHTML={{__html: props.description}}/>
      <Thumbnail
        onAnimationEnd={(e: any/*FIXME: 型*/) => {
          e.target.style.opacity = '1'
        }}
        href={props.url}
        target="_blank"
      >
        <ThumbnailText>Launch Site</ThumbnailText>
        <img src={props.thumbnail}/>
      </Thumbnail>

    </View>
  )
}

export default WorkItem
