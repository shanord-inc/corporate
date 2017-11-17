import * as React from 'react'
import media from '../../../styles/mixins/media'
import styled from '../../../styles/themed-components'
import {OpeningContextTypes} from '../Opening/OpeningProvider'
import withOpening from '../Opening/withOpening'

const View = styled.div`
  z-index: 2;
  position: absolute;
  top: calc(50% + 30px);
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
`
const Char = styled.span`
  overflow: hidden;
  height: 50px;
  
  svg {
    width: auto;
    height: 50px;
    fill: #fff;
    
    ${media.tablet`
      height: 100px;
    `}
    
    ${media.desktop`
      height: 150px;
    `}
  
  }
`

type State = {
  isLoaded: boolean
}

class Keyvisual extends React.Component<OpeningContextTypes, State> {

  render() {
    return (
      <View innerRef={e => {
        this.props.opening.push({name: 'keyvisual', element: e})
      }}>
        <Char>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 315.1 54.9"><title>アセット 29</title>
            <g id="レイヤー_2" data-name="レイヤー 2">
              <g id="レイヤー_1-2" data-name="レイヤー 1">
                <path
                  d="M0,41V39.3H8.1c.1,5,3.6,8.1,8.7,8.1,4.6,0,8.8-2.2,8.8-7.4,0-5.8-6.1-8.1-12.1-10.9S1.3,22.8,1.3,14.8C1.3,5.6,8.9,0,17.8,0c7.3,0,15.4,5.1,15.4,13.2v1H25.1c.3-4.5-3.2-6.8-7.5-6.8S9.4,9.1,9.4,14.1c0,3.9,3.1,5.9,6.1,7.3l4.7,2.2c7.2,3.5,13.5,7.2,13.5,16.3,0,9.4-8.1,14.9-16.9,14.9C8.7,54.9,0,49.8,0,41Z"/>
                <path
                  d="M55.1,17.9c2.5-2.6,6.5-3.9,10.2-3.9C75.5,14,79,21.3,79,30.4V54.2H70.9V29.8c0-5-1-8.4-6.8-8.4-8,0-9.1,5-9.1,11.7V54.2H46.9V.1H55Z"/>
                <path
                  d="M116.8,50.4a16.73,16.73,0,0,1-11.4,4.5c-7.6,0-14.2-4.2-14.2-12.2,0-10.2,9.6-13.3,18.3-13.3h7.3V28c0-4.5-.6-7.8-7.3-7.8-4.2,0-8.4.6-8.4,4.5H93c.6-8.7,8.9-10.6,16.1-10.6,11.4,0,15.8,4,15.8,15.6V54.2h-8.1V50.4Zm-8.4-14.9c-4.4,0-9.1,1.7-9.1,6.9,0,4.1,2.9,6.4,6.9,6.4,7.2,0,10.6-5.4,10.6-11.9V35.6h-8.4Z"/>
                <path
                  d="M147.4,19.1h.2c2.5-3.3,7.6-5.1,12-5.1,9.4,0,15,6.2,15,15.4V54.2h-8.1V28.8c0-5.2-2.4-8-7.8-8-8,0-11.3,5.4-11.3,12.8V54.2h-8.1V14.7h8.1v4.4Z"/>
                <path
                  d="M224.1,34.2c0,11.7-7,20.6-19.1,20.6s-19.1-9-19.1-20.6c0-12,7.2-20.2,19.1-20.2S224.1,22.3,224.1,34.2Zm-30.2.1c0,7.3,2.5,14.5,11,14.5s11-7.2,11-14.5S213,20,204.9,20,193.9,27,193.9,34.3Z"/>
                <path
                  d="M245.7,19h.2a12.56,12.56,0,0,1,10.2-5,11.61,11.61,0,0,1,12,12v1.6H260V26.4c0-3.1-1.5-6.3-5-6.3-7.7,0-9.3,7.7-9.3,13.7V54.2h-8.1V14.7h8.1V19Z"/>
                <path
                  d="M307,50.1a16.86,16.86,0,0,1-11.3,4.8c-11.8,0-17.6-9.5-17.6-20.3,0-10.6,5.2-20.6,17-20.6,4.3,0,9.1,1.4,11.7,4.9h.2V.1h8.1V54.2H307V50.1Zm0-16.2c0-7-3-13.2-10.9-13.2-7.2,0-9.8,7-9.8,13.2,0,6.6,2.6,14.2,10.4,14.2C304.3,48.1,307,40.5,307,33.9Z"/>
              </g>
            </g>
          </svg>
        </Char>
      </View>
    )
  }
}

export default withOpening(
  Keyvisual
)
