import * as React from 'react'
import styled from 'styled-components'

const View = styled.div`
`

const LayoutMenu: React.SFC<{}> = props =>
  <View>
    {props.children}
  </View>

export default LayoutMenu

