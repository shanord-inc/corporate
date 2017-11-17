import * as React from 'react'
import {ReactNode} from 'react'
import Information from '../../../containers/Information'
import media from '../../../styles/mixins/media'
import styled from '../../../styles/themed-components'
import fadeIn from '../../../styles/mixins/animations/fadeIn'

const View = styled.div`
  ${fadeIn()};
`
const Text = styled.div`
  margin-top: 80px;
  text-align: center;
  font-size: 16px;
  color: #000;
  line-height: 2.4;
  br {
    display: none;
  }
  
  ${media.tablet`
    font-size: 21px;
    br {
      display: block;
    }
  `}
`

export type Props = {
  catchphrase: string
  children?: ReactNode
};

export default function Index(props: Props) {
  return (
    <View>
      <Text dangerouslySetInnerHTML={{__html: props.catchphrase}}/>
      <Information/>
    </View>
  )
}

