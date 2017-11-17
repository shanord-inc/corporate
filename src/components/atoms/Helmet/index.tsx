import * as React from 'react'
import {default as BaseHelmet} from 'react-helmet'

export type Props = {
  title: string
  siteTitle: string
}

const Helmet: React.SFC<Props> = (props) => {
// export default function Helmet(props: Props) {
  const pageTitle = props.title ? `${props.title} - ${props.siteTitle}` : props.siteTitle
  return (
    <BaseHelmet title={pageTitle}/>
  )
}

export default Helmet
