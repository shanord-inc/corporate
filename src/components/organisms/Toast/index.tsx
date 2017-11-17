import * as React from 'react'
import styled from 'styled-components'
import {translateDownIn, translateUpIn} from '../../../styles/keyframes/translate'
import animation from '../../../styles/mixins/animation'
import ease from '../../../styles/variables/ease'
import media from '../../../styles/mixins/media'

const StyledToast = styled.div`
  position: relative;
  margin: 1px auto 0;
  padding: 1.5em 4em 1.5em 1.5em;
  min-width: 300px;
  max-width: 500px;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 16px;
  text-align: left;
  
  ${animation({
    duration: 0.5,
    easing: ease.easeInOutCubic,
    keyframe: translateUpIn(),
  })};
  
  //FIXME: tabletでanimation
  ${media.tablet`
    ${animation({
      duration: 0.5,
      easing: ease.easeInOutCubic,
      keyframe: translateDownIn(),
    })}
  `}
`

const Dismiss = styled.p`
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #fff;
`

export type ItemProps = {
  message: string,
  onClickDismiss: (message: string) => void
}

const Toast: React.SFC<ItemProps> = props => {
  return (
    <StyledToast>
      <Dismiss onClick={() => props.onClickDismiss(props.message)}>閉じる</Dismiss>
      {props.message}

    </StyledToast>
  )
}

const StyledToastList = styled.div`
  z-index: 3000;
  position: fixed;
  bottom: 0;
  left:  0;
  right:  0;
  ${media.tablet`
    top: 62px;
    bottom: auto;
  `}
`

export type Props = {
  onClickDismiss: (message: string) => void,
  items: string[]
}
const ToastList: React.SFC<Props> = props => {
  const toasts = props.items.map((item, index) => {
    return (
      <Toast
        key={index}
        message={item}
        {...props}
      />
    )
  })
  return (
    <StyledToastList>
      {toasts}
    </StyledToastList>
  )
}

export default ToastList
