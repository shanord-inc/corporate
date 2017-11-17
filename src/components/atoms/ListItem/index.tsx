import * as React from 'react'
import styled, {withProps} from '../../../styles/themed-components'
import media from '../../../styles/mixins/media'

type StyleProps = {
  first: boolean
  last: boolean
  width?: number
}

const View = withProps<StyleProps, HTMLDivElement>(styled.div)`
  border-top: 1px solid #eee;
  padding: 10px 10px;
  display: table-cell;
  width: ${props => props.width ? props.width : 'auto'};
  font-size: 14px;
  text-align: left;
  
  /* FIXME: &&で書きたい */
  ${props => props.first ? `
    min-width: 6em;
    padding-left: 0;
  ` : ''}
  ${props => props.last ? `
    padding-right: 0;
  ` : ''}
  
  ${media.tablet`
    padding: 1.8em 1.2em;
  `}
`

type Props = {
  first: boolean
  label: any
  last: boolean
  width?: number
}

const ListItem: React.SFC<Props> = props =>
  <View {...props}>
    {props.label}
  </View>

export default ListItem
