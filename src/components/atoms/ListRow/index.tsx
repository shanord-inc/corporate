import * as React from 'react'
import styled from '../../../styles/themed-components'
import ListItem from '../ListItem'

const View = styled.div`
  display: table-row;
`

type Props = {
  cols: any
}

const ListRow: React.SFC<Props> = props => {
  const cols = Object.keys(props.cols).map((key, index) => {
    return <ListItem
      first={index === 0}
      key={index}
      last={index === Object.keys(props.cols).length - 1}
      label={props.cols[key]}
    />
  })
  return (
    <View>
      {cols}
    </View>
  )
}

export default ListRow
