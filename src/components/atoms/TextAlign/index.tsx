import * as React from 'react'
import styled, {withProps} from '../../../styles/themed-components'

export enum Align {
  center = 'center',
  left = 'left',
  right = 'right'
}

type Props = {
  align?: Align
}
const TextAlign = withProps<Props, HTMLDivElement>(styled.p)`
  ${props => props.align
    ? `text-align: ${props.align};`
    : ``
  }
`

export default TextAlign
