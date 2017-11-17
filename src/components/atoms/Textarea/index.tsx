import * as React from 'react'

export type Props = {
  name?: string
  placeholder?: string
  value?: string
}

export default function Textarea(props: Props) {
  return (
    <textarea
      {...props}
    />
  )
}
