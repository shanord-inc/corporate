import * as React from 'react'
import styled from 'styled-components'
import transition from '../../../styles/mixins/transition'
import ease from '../../../styles/variables/ease'

const TextLink = styled.span`
  position: relative;
  color: #000;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    ${transition({duration: 0.2, easing: ease.easeOutCubic})};
    border-bottom: 1px solid #000;
  } 
  
  &:hover::after {
    width: 0;
  }
`

export default TextLink
