import * as React from 'react'
import {keyframes} from 'styled-components'
import {transition} from '../../../styles'
import animation from '../../../styles/mixins/animation'

import styled, {withProps} from '../../../styles/themed-components'
import ease from '../../../styles/variables/ease'

type StyleProps = {
  isLoading: boolean
}

const View = withProps<StyleProps, HTMLDivElement>(styled.div)`
  z-index: 6000;
  position: fixed;
  width: 100%;
  top: 60px;
  left: 0;

  opacity: ${(props: StyleProps) => props.isLoading ? 1 : 0};
  visibility :${(props: StyleProps) => props.isLoading ? 'visible' : 'hidden'}; 
  ${transition}
`

const translate = () => {
  return keyframes`
    0% {
      transform: translateX(-100%);
      transform-origin: left;
    }
    50% {
      transform: translateX(0%);
      transform-origin: left;
    }
    100% {
      transform: translateX(100%);
      transform-origin: left;
    }
  `
}
const Inner = styled.div`

  ${animation({
    duration: 0.75,
    easing: ease.easeInOutSine,
    iteration: 'infinite',
    keyframe: translate(),
  })};
  border: solid 0.5px rgba(0, 0, 0, 0.1);
`

type Props = {
  isLoading: boolean
}

export default function Indicator(props: Props) {
  return (
    <View isLoading={props.isLoading}>
      <Inner></Inner>
    </View>
  )
};

