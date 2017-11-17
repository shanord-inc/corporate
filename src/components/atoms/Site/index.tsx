import * as React from 'react'
import styled from 'styled-components'

const View = styled.div`
  position: relative;
  display:block;
`

const Layout: React.SFC<{}> = props =>
  <View>
    {props.children}
  </View>

export default Layout

