import * as React from 'react'
import {NavLink} from 'react-router-dom'
import {compose} from 'recompose'
import styled from 'styled-components'
import github from '../../../images/GitHub-Mark-64px.png'
import media from '../../../styles/mixins/media'
import transition from '../../../styles/mixins/transition'
import {withProps} from '../../../styles/themed-components'
import {OpeningContextTypes} from '../Opening/OpeningProvider'
import withOpening from '../Opening/withOpening'
import connectMenu from './connectMenu'
import {MenuContextTypes} from './MenuProvider'

type StyleProps = {
  isShow: boolean
}
const View = withProps<StyleProps, HTMLDivElement>(styled.div)`
  z-index: 5500;
  position: fixed;
  width: 100%;
  height: calc(100% - 60px);
  top: 60px;
  left: 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transform: translateY(-100%);
  
  ${transition({})};
  opacity: ${props => props.isShow ? 1 : 0};
  visibility: ${props => props.isShow ? 'visible' : 'hidden'};
  
  
  ${media.tablet`
    transition: none;
    padding: 14px 25px;
    top: 0;
    left: auto;
    right: 0;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    
    background-color: transparent;
    opacity: 1;
    visibility: visible;
  `}
`
const NavItem = styled(NavLink)`

  margin: 14px 0;
  font-size: 18px;
  color: #000;
  
  ${media.tablet`
    position: relative;
    display: block;
    margin: 0 25px 0;
  `}
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid #000;
    width: 100%;
    height: 1px;
    ${transition({})};
    transform: scale(0);
    transform-origin: 0 0;
  }
  &:hover::after, &.active::after {
    transform: scale(1);
  }
`

const Links = styled.div`
  position: absolute;
  width: 100%;
  bottom: 40px;
  text-align: center;
  
  ${media.tablet`
    position: relative;
    display: block;
    margin: 0 25px 0;
    bottom: auto;
  `}
`
const Link = styled.a`
  display: inline-block;
  max-width: 30px;
  
  ${media.tablet`
    max-width: 26px;
  `}
  
  img {
    width: 100%;
    height: auto;
  }
`

class Menu extends React.Component<OpeningContextTypes & MenuContextTypes> {

  render() {
    const {props} = this
    return (
      <View innerRef={e => {
        this.props.opening.push({name: 'menu', element: e})
      }} isShow={props.menu.isShow}>
        <NavItem onClick={() => props.menu.hide()} to="/" exact>HOME</NavItem>
        <NavItem onClick={() => props.menu.hide()} to="/works">WORKS</NavItem>
        <NavItem onClick={() => props.menu.hide()} to="/news">NEWS</NavItem>
        <NavItem onClick={() => props.menu.hide()} to="/contact">CONTACT</NavItem>
        <Links>
          <Link href="https://github.com/shanord-inc" target="_blank">
            <img src={github}/>
          </Link>
        </Links>
      </View>
    )
  }
}

export default compose(
  connectMenu,
  withOpening,
)(Menu)
