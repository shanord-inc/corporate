import * as React from 'react'
import styled from 'styled-components'
import transition from '../../../styles/mixins/transition'
import BaseButton, {BUTTON_TYPES} from '../../atoms/Button'

const View = styled.p`
`
const StyledButton = styled(BaseButton)`
  cursor: pointer;
  max-width: 300px;
  width: 100%;
  margin: 100px auto 0;
  display: block;
  border: 1px solid #999;
  padding: 1em 2em;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  background-color: #fff;
  
  ${transition({})};
  &:hover {
    color: #fff;
    background-color: #000;
  }
`

export type Props = {
  dispatch: any, // FIXME: connectでついてきてしまう
  disabled?: boolean,
  type?: BUTTON_TYPES,
  onClick: () => void,
  hasNext?: boolean
}

// FIXME: hasNextいらんやろ
const NextButton: React.SFC<Props> = ({hasNext, dispatch, ...props}) => {
  return (
    <View>
      {hasNext && (
        <StyledButton {...props} >
          {props.children}
        </StyledButton>
      )
      }
    </View>
  )
}

export default NextButton

