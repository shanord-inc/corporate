import * as React from 'react'
import styled from 'styled-components'

const StyledLayoutMain = styled.div`
  overflow: hidden;
  width: 100%;
  padding-bottom: 150px;
  display:block;
`

const Layout: React.SFC<{}> = props =>
  <StyledLayoutMain>
    {props.children}
  </StyledLayoutMain>

export default Layout

