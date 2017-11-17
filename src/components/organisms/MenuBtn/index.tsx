import * as React from 'react'
import {compose} from 'recompose'
import media from '../../../styles/mixins/media'
import styled, {withProps} from '../../../styles/themed-components'
import ease from '../../../styles/variables/ease'
import connectMenu from '../Menu/connectMenu'
import {MenuContextTypes} from '../Menu/MenuProvider'
import {OpeningContextTypes} from '../Opening/OpeningProvider'
import withOpening from '../Opening/withOpening'

const View = styled.div`
  z-index: 5600;
  position: fixed;
  top: 0;
  right: 0;
  margin-right: auto;
  display: block;
  width: 70px;
  height: 60px;
  
  transform: translateY(-100%);
  
  ${media.tablet`
    display: none;
  `}
`

const Inner = styled.div`
  position: relative;
  padding: 23px 24px;
  width: 70px;
  height: 60px;
  border-radius: 50%;
`

type BarProps = {
  isShow: boolean
}
const Bar = withProps<BarProps, HTMLDivElement>(styled.span)`
  position: relative;
  display: block;
  top: 0;
  width: 20px;
  height: 2px;
  background-color: #000;
  border-radius: 10px;
  transition: 0.44s ${ease.easeOutBack};
`

const Bar1 = Bar.extend`
  top: ${(props: BarProps) => props.isShow ? '6px' : ''};
  transform: ${(props: BarProps) => props.isShow ? 'rotate(-135deg) !important;' : ''};
`

const Bar2 = Bar.extend`
  top: 5px;
  
  opacity: ${(props: BarProps) => props.isShow
  ? 0
  : ''};
  
  transition-delay: 0.2s;
  transform: ${(props: BarProps) => props.isShow
  ? 'translateX(50%) rotate(-135deg)'
  : ' rotate(10deg)'};
`

const Bar3 = Bar.extend`
  top: 10px;
  
  top: ${(props: BarProps) => props.isShow ? '2px' : ''};
  transform: ${(props: BarProps) => props.isShow ? 'rotate(135deg) !important;' : ''};
`

class MenuBtn extends React.Component<OpeningContextTypes & MenuContextTypes> {

  render() {
    const {props} = this
    return (
      <View
        innerRef={e => {
          this.props.opening.push({name: 'menuBtn', element: e})
        }}
        onClick={() => props.menu.toggle()}
      >
        <Inner>
          <Bar1 isShow={this.props.menu.isShow}/>
          <Bar2 isShow={this.props.menu.isShow}/>
          <Bar3 isShow={this.props.menu.isShow}/>
        </Inner>

      </View>
    )
  }
}

export default compose(
  connectMenu,
  withOpening
)(MenuBtn)


