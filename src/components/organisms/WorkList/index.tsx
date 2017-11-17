import * as React from 'react'
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import styled from 'styled-components'
import Lazy from '../../molecules/Lazy/index' // ES6
import Placeholder from '../../molecules/Placeholder'
import WorkItem, {Props as ItemProps} from './WorkItem'
import * as animations from '../../../styles/mixins/animations'

const View = styled.div`
  ${animations.fadeIn()};
`

export type Props = {
  hasNext: boolean
  items: ItemProps[]
  onScroll: () => Promise<any>
};

const WorkList: React.SFC<Props> = props => {
  const list = props.items.map((item, index) => {
    return <WorkItem key={index} {...item} />
  })
  return (
    <View>
      <ReactCSSTransitionGroup
        transitionName="fade"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
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

export default WorkList
