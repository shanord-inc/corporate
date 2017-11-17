import * as React from 'react'

export enum InputType {
  button = 'button',
  checkbox = 'checkbox',
  date = 'date',
  datetimeLocal = 'datetime-local',
  email = 'email',
  file = 'file',
  hidden = 'hidden',
  image = 'image',
  month = 'month',
  number = 'number',
  password = 'password',
  radio = 'radio',
  range = 'range',
  reset = 'reset',
  submit = 'submit',
  text = 'text',
  time = 'time',
  url = 'url',
  week = 'week'
}

export type Props = {
  name?: string
  onBlur: (val: any) => void
  onChange: (val: any) => void // 型
  onFocus: (val: any) => void
  placeholder?: string
  type?: InputType
  value?: string
}

/**
 * Input
 *
 * @param props - props
 * @param props.type - type
 */
export default function Input({type = InputType.text, ...props}: Props) {
  return (
    <input
      {...props}
    />
  )
}
