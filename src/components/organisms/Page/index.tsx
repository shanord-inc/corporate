import * as React from 'react'
import styled from 'styled-components'
import Helmet from '../../../containers/Helmet'
import media from '../../../styles/mixins/media'
import Container from '../../atoms/Container/index'
import {OpeningContextTypes} from '../Opening/OpeningProvider'
import withOpening from '../Opening/withOpening'

const Title = styled.div`
  padding: 100px 0 15px;
  font-size: 34px;
  font-weight: 700;
  
  ${media.tablet`
     padding-top: 150px; 
  `}
`

export type Props = {
  title: string,
}

class Page extends React.Component<OpeningContextTypes & Props> {

  componentDidMount() {
    this.props.opening.start()
  }

  render() {
    const {props} = this
    return (
      <Container>
        <Helmet title={props.title}/>

        {props.title && (
          <Title>{props.title}</Title>
        )}

        {props.children}
      </Container>
    )
  }
}

export default withOpening(
  Page
)
