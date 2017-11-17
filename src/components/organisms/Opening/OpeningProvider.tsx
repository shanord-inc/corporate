import * as gsap from 'gsap'
import * as React from 'react'
import * as PropTypes from "prop-types";

//FIXME: 型
export type OpeningContextTypes = {
  opening: {
    start: (type?: OpeningType) => void,
    push: (dom: {name: string, element: Element}) => void,
  }
};

type State = {
  kv: Element | null
  header: Element | null
};

export enum OpeningType {
  home,
  misc
}

export default class OpeningProvider extends React.Component<{}, State> {

  list: {[key: string]: Element}

  static childContextTypes = {
    opening: PropTypes.object
  }

  getChildContext(): OpeningContextTypes {
    return {
      opening: {
        push: this.onPush.bind(this),
        start: this.onStart.bind(this),
      }
    }
  }

  // TODO: こんなところでアニメーションしていいのか
  onStart(type: OpeningType = OpeningType.misc) {
    const opening = {
      [OpeningType.home]: () => {
        const tl = new gsap.TimelineMax({})
        tl.add([
            gsap.TweenMax.to(
              this.list['kv'],
              1.2,
              {delay: 0.10, ease: gsap.Quad.easeInOut, opacity: 1}
            ),
            gsap.TweenMax.to(
              this.list['keyvisual'],
              1.7,
              {delay: 0.6, ease: gsap.Power0.easeInOut, opacity: 1}
            ),
            gsap.TweenMax.to([
              this.list['header'],
              this.list['menu'],
              this.list['menuBtn'],
            ], 1.0, {delay: 1.5, ease: gsap.Cubic.easeInOut, y: 0})
          ]
        )
      },
      [OpeningType.misc]: () => {
        const tl = new gsap.TimelineMax({})
        tl.add(
          gsap.TweenMax.to([
            this.list['header'],
            this.list['menu'],
            this.list['menuBtn'],
          ], 1.0, {delay: 0.6, ease: gsap.Cubic.easeInOut, y: 0})
        )
      }
    }

    opening[type]()
  }

  onPush(dom: {name: string, element: Element}) {
    if (dom && dom.name && dom.element) {
      this.list = ({...this.list, [dom.name]: dom.element})
    }
  }

  render() {
    return React.Children.only(this.props.children)
  }
}
