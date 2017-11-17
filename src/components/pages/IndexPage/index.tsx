import * as React from 'react'
import {compose} from 'recompose'
import Keyvisual from '../../organisms/Keyvisual'
import {OpeningContextTypes, OpeningType} from '../../organisms/Opening/OpeningProvider'
import withOpening from '../../organisms/Opening/withOpening'
import Index from '../../../containers/Index'
import kv from '../../../images/index/kv.jpg'
import styled, {withProps} from '../../../styles/themed-components'
import Container from '../../atoms/Container/index'

const View = styled.div``
const DummyKv = styled.img`
  display: none;
`

const KvOuter = withProps<{height: number}, HTMLDivElement>(styled.div)`
  overflow: hidden; 
  position: relative;
  height: ${props => props.height}px;
`
const Kv = withProps<{height: number}, HTMLDivElement>(styled.div)`
  overflow: hidden;
  width: 100%;
  height: 98vh;
  height: ${props => props.height}px;
  background: url(${kv}) no-repeat 50% 50%;
  background-size: cover;
  
  opacity: 0;
`


type State = {
  isLoaded: boolean
}

class IndexPage extends React.Component<OpeningContextTypes, State> {

  constructor(props: OpeningContextTypes) {
    super(props)
    this.state = {isLoaded: false}
  }

  onLoaded() {
    this.setState({isLoaded: true})
    this.props.opening.start(OpeningType.home)
  }

  render() {
    return (
      <View>
        <DummyKv src={kv} onLoad={this.onLoaded.bind(this)}/>
        <KvOuter height={window.innerHeight}>
          <Kv height={window.innerHeight} innerRef={e => {
            this.props.opening.push({name: 'kv', element: e})
          }}/>
          <Keyvisual/>
        </KvOuter>
        <Container>
          <Index/>
        </Container>
      </View>
    )
  }
}

export default compose(
  withOpening,
)(IndexPage)
