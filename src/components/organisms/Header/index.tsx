import * as React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../../images/logo-txt.png'
import media from '../../../styles/mixins/media'
import {OpeningContextTypes} from '../Opening/OpeningProvider'
import withOpening from '../Opening/withOpening'

const View = styled.div`
  z-index: 4000;
  position: fixed;
  width: 100%;
  background-color: #fff;
  top: 0;
  left: 0;
  padding: 17px 20px;
  display:block;
  
  ${media.tablet`
    padding: 12px 20px;
  `};
  
  transform: translateY(-100%);
  
`
const Logo = styled.i`
  img {
    max-width: 120px;
    height: auto; 
    
    ${media.tablet`
      max-width: 160px;
    `}
  }
`

const Header: React.SFC<OpeningContextTypes> = props =>
  <View innerRef={(e: Element) => {
    props.opening.push({name: 'header', element: e})
  }}>
    <Link to="/">
      <Logo>
        <img src={logo}/>
      </Logo>
    </Link>
  </View>

export default withOpening(
  Header
)


