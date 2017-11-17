import * as React from 'react'
import Scroll from '../../../lib/ScrollPosition'
import styled from '../../../styles/themed-components'
import ListView from '../../atoms/ListView'

const View = styled.div`
  margin-top: 80px;
  text-align: left;
`

export type Props = {
  information: {title: string, content: string}[]
}

class Information extends React.Component<Props> {
  element: HTMLElement
  scroll: Scroll

  render() {
    return (
      <View>
        <ListView dataSource={this.props.information}/>
      </View>
    )
  }
}

export default Information
