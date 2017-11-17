import * as React from 'react'
import {Link} from 'react-router-dom'
import Text from '../../atoms/Text'
import Title from '../../atoms/Title'
import Button from '../../atoms/SimpleButton/index'

export default function NewsPage() {
  return (
    <div>
      <Title>このページはご利用いただけません</Title>

      <Text>
        リンクに問題があるか、ページが削除された可能性があります。
      </Text>
      <Link to="/">
        <Button margin="80px 0 0">
          HOME
        </Button>
      </Link>
    </div>
  )
}
