import * as React from 'react'
import {ReactNode} from 'react'
import ScrollPositioner, {Pos} from '../../../lib/ScrollPosition'
import fadeIn from '../../../styles/keyframes/fadeIn'
import animation from '../../../styles/mixins/animation'
import styled, {withProps} from '../../../styles/themed-components'

const View = withProps<{height?: string}, HTMLDivElement>(styled.div)`
  height: ${props => props.height ? props.height : ''};
`

const DefaultPlaceholder = styled.div`
  padding-top: 50px;
  margin: 50px auto 0;
  width: 100%;
  height: auto;
  text-align: center;
  font-size: 16px;
  border-top: solid #efefef 1px;
  
  ${animation({keyframe: fadeIn(), delay: 1.0})};
`

export type Props = {
  placeholder?: ReactNode
  height?: string
  onScroll: () => Promise<any>
}

type State = {
  scrolled: boolean
  busy: boolean
}

const TOP_PER = 0.1

export default class Lazy extends React.Component<Props, State> {
  element: HTMLElement
  scroll: ScrollPositioner
  destroyed: boolean = false

  static defaultProps = {
    placeholder: <DefaultPlaceholder>Loading...</DefaultPlaceholder>,
  }

  constructor(props: Props) {
    super(props)
    this.state = {busy: false, scrolled: false}
    this.scroll = new ScrollPositioner()
    this._onScroll = this._onScroll.bind(this)
  }

  _onScroll(e: Pos) {
    if (e.top > TOP_PER && !this.state.busy) {
      this.setState({busy: true})
      this.scrolled()
    }
  }

  private scrolled() {
    this.props.onScroll().then(() => {
      this.setState({busy: false, scrolled: false})
    }).catch(() => {
      this.scroll.removeListener(ScrollPositioner.SCROLL, this._onScroll)
    })
  }

  componentDidMount() {
    this.scroll.removeListener(ScrollPositioner.SCROLL, this._onScroll)
    this.scroll.addListener(ScrollPositioner.SCROLL, this._onScroll)
  }

  componentWillUnmount() {
    this.scroll.destroy()
    this.destroyed = true
  }

  render() {
    return (
      <View
        innerRef={
          e => /*FIXME: WillUnmountしてもinnerRefが実行される・・・*/ !this.destroyed && this.scroll.init(e)}
      >
        {this.state.scrolled
          ? this.props.children
          : this.props.placeholder
        }
      </View>
    )
  }
}
