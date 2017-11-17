import * as React from 'react'
import styled from 'styled-components'
import media from '../../../styles/mixins/media'

const View = styled.div`
  overflow: hidden;
  display:block;
  padding: 0 20px;
  
  ${media.tablet`
    max-width: 800px;
    margin: 0 auto;
  `}
`

const Container: React.SFC<{}> = props =>
  <View>
    {props.children}
  </View>

export default Container
