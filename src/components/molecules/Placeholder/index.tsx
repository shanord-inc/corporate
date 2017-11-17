import * as React from 'react'
import styled, {keyframes} from 'styled-components'
import animation from '../../../styles/mixins/animation'
import media from '../../../styles/mixins/media'
import {withProps} from '../../../styles/themed-components'
import ease from '../../../styles/variables/ease'

const yoyo = () => {
  return keyframes`
    0% {
      opacity: 0.65;
    }
    60% {
      opacity: 1.00;
    }
    100% {
      opacity: 0.65;
    }
  `
}
const StyledPlaceholder = styled.div`
  margin-top: 70px;
  
  ${media.tablet`
    margin-top: 80px;
  `}
`
const Line = withProps<{delay: number}, HTMLDivElement>(styled.div)`
  margin: 22px 0;
  display: block;
  max-width: 600px;
  width: 100%;
  height: 15px;
  background-color: rgba(0, 0, 0, 0.05);
  
  ${props => animation({
    delay: props.delay || 0,
    duration: 0.8,
    easing: ease.easeInOutCubic,
    iteration: 'infinite',
    keyframe: yoyo(),
  })};
  
  ${media.tablet`
    height: 18px;
    margin: 30px 0;
  `}
`
const Linesm = Line.extend`
  width: 70%;
`

export default function Placeholder() {
  return (
    <StyledPlaceholder>
      <Line delay={0}/>
      <Line delay={0.1}/>
      <Linesm delay={0.2}/>
    </StyledPlaceholder>
  )
}
