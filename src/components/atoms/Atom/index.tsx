import * as React from 'react'
import styled, {withProps} from '../../../styles/themed-components'

export enum Align {
  center = 'center',
  left = 'left',
  right = 'right'
}

export type AtomProps = {
  marginTop?: string
  align?: Align
}
const Atom = withProps<AtomProps, HTMLDivElement>(styled.div)`

  ${props => props.marginTop
    ? `margin-top: ${props.marginTop};`
    : ``
  }
  
  ${props => props.align
    ? `text-align: ${props.align};`
    : ``
  }
`

export default Atom
