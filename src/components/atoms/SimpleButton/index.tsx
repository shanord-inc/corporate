import * as React from 'react'
import styled from 'styled-components'
import transition from '../../../styles/mixins/transition'
import {withProps} from '../../../styles/themed-components'
import BaseButton, {BUTTON_TYPES} from '../Button'

type ButtonProps = {
  margin?: string
}
const View = withProps<ButtonProps, HTMLDivElement>(styled.p)`
  display: inline-block;
  ${(props: ButtonProps) => props.margin ? `
    margin: ${props.margin};
  ` : ``};
  
`
const StyledButton = styled(BaseButton)`
  cursor: pointer;
  max-width: 300px;
  width: 100%;
  margin: 20px auto 0;
  display: block;
  border: 1px solid #999;
  padding: 1em 2em;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  background-color: #fff;
  
  ${transition({})};
  &:hover:not(:disabled) {
    color: #fff;
    background-color: #000;
  }
  &:hover a:not(:disabled) {
    color: #fff;
  }
  &:disabled {
    opacity: 0.5;
  }
`

export type Props = {
  disabled?: boolean,
  margin?: string,
  type?: BUTTON_TYPES,
  onClick?: () => void,
}

const Button: React.SFC<Props> = ({margin, ...props}) => {
  return (
    <View margin={margin}>
      <StyledButton {...props} >
        {props.children}
      </StyledButton>
    </View>
  )
}

export default Button

