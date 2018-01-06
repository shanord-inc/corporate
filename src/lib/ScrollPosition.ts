import * as EventEmitter from 'events'

export type Pos = {
  bottom: number,
  top: number,
}

export default class ScrollPosition extends EventEmitter {
  element: HTMLElement | null
  framerate: number
  timer: number = -1
  static SCROLL: string = 'scroll'

  constructor(framerate: number = 15) {
    super()
    this.framerate = framerate
    this._handleScroll = this._handleScroll.bind(this)
  }

  private _handleScroll() {
    if (!this.element) {
      return
    }
    const wt = window.pageYOffset
    const tt = this.element.offsetTop
    const wh = window.pageYOffset + window.innerHeight
    const th = this.element.offsetTop + this.element.clientHeight
    if (wh > tt && wt < th) {
      clearTimeout(this.timer)
      this.timer = window.setTimeout(() => {
        this.emit(ScrollPosition.SCROLL, {
          bottom: (wh - th) / window.innerHeight,
          top: (wh - tt) / window.innerHeight,
        })
      }, this.framerate)
    }
  }

  init(element: HTMLElement) {
    if (!this.element) {
      this.element = element
      window.addEventListener('scroll', this._handleScroll)
    }
  }

  destroy() {
    this.element = null
    window.removeEventListener('scroll', this._handleScroll)
  }
}

