import * as React from 'react'
import * as PropTypes from "prop-types";

export type MenuContextTypes = {
  menu: {
    hide: () => any,
    isShow: boolean,
    show: () => any,
    toggle: () => any
  }
};

type State = {
  isShow: boolean
};

export default class MenuProvider extends React.Component<{}, State> {

  static childContextTypes = {
    menu: PropTypes.object
  }

  constructor(props: {}) {
    super(props)
    this.state = {isShow: false}
  }


  getChildContext(): MenuContextTypes {
    return {
      menu: {
        hide: this.onHide.bind(this),
        isShow: this.state.isShow,
        show: this.onShow.bind(this),
        toggle: this.onToggle.bind(this)
      }
    }
  }

  onHide() {
    this.setState({isShow: false})
  }

  onShow() {
    this.setState({isShow: true})
  }

  onToggle() {
    this.setState({isShow: !this.state.isShow})
  }

  render() {
    return React.Children.only(this.props.children)
  }
}
