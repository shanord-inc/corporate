import * as React from 'react'
import Indicator from '../Indicator/index'

export type Props = {
  isLoading: boolean,
}

const Page: React.SFC<Props> = props =>
  <div>
    <Indicator isLoading={props.isLoading}/>
    {props.children}
  </div>

export default Page
