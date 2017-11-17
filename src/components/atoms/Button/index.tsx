import * as React from 'react'

export enum BUTTON_TYPES {
  button = 'button',
  reset = 'reset',
  submit = 'submit'
}

export type ButtonOptions = {
  autofocus?: boolean,
  disabled?: boolean,
  form?: string,
  formaction?: string,
  formenctype?: string,
  formmethod?: string,
  formnovalidate?: string,
  formtarget?: string,
  name?: string,
  type?: BUTTON_TYPES,
  value?: string
};

type Props = ButtonOptions & {
  onClick?: () => void,
  backgroundColor?: string,
  // htmlTag?: string
};

const Button: React.SFC<Props> = ({type=BUTTON_TYPES.button, ...props}) => {
  return (
    <button type={type} {...props} />
  )
}

export default Button
