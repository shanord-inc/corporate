import * as React from 'react'
import styled from 'styled-components'

const View = styled.div`
  display: flex;
  flex-direction: row;
`

const Layout: React.SFC<{}> = props =>
  <View>
    {props.children}
  </View>

export default Layout

