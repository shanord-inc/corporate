import * as React from 'react'
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled from 'styled-components'
import BaseNextButton from '../../../containers/NextButton'
import fadeIn from '../../../styles/keyframes/fadeIn' // ES6
import animation from '../../../styles/mixins/animation'
import Lazy from '../../molecules/Lazy'
import NewsItem, {Props as ItemProps} from './NewsItem'
import Placeholder from '../../molecules/Placeholder'
import * as animations from '../../../styles/mixins/animations'

const View = styled.div`
  ${animations.fadeIn()};
`

const NextButton = styled(BaseNextButton)`
  ${animation({keyframe: fadeIn(), delay: 1.5})}
`

export type Props = {
  hasNext: boolean
  // items: ItemProps[]
  items: any[]
  onScroll: () => Promise<any>
  onClick: (id: string) => void
};

const News: React.SFC<Props> = props => {
  const list = props.items.map((item, index) => {
    return <NewsItem
      key={index}
      onClick={() => props.onClick(item.id)}
      {...item}
    />
  })
  return (
    <View>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {list}
      </ReactCSSTransitionGroup>

      {(props.items.length === 0 || props.hasNext) && (
        <Lazy
          onScroll={props.onScroll}
          height="100px"
          placeholder={<Placeholder/>}
        />
      )}
    </View>
  )
}

export default News
