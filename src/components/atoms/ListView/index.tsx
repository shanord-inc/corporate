import * as React from 'react'
import styled from '../../../styles/themed-components'
import ListRow from '../ListRow';

const View = styled.div`
  display: table;
  width: 100%;
`

type Props = {
  styles?: any,
  dataSource: any[]
}

const ListView: React.SFC<Props> = props => {
  const rows = props.dataSource.map((cols, index) => {
    return (
      <ListRow key={index} cols={cols} />
    )
  })
  return (
    <View>
      {rows}
    </View>
  )
}

export default ListView
