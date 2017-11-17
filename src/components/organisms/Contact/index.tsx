import * as React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import InputField from '../../../containers/InputField'
import TextareaField from '../../../containers/TextareaField'
import {form} from '../../../services/forms'
import {BUTTON_TYPES} from '../../atoms/Button/index'
import {InputType} from '../../atoms/Input/index'
import Note from '../../atoms/Note'
import TextLink from '../../atoms/TextLink'
import Button from '../../atoms/SimpleButton'
import ButtonGroup from '../../atoms/ButtonGroup'
import {Align} from '../../atoms/TextAlign/index'
import * as animations from '../../../styles/mixins/animations'

const View = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 16px 0;
  display:block;
  
  ${animations.fadeIn()};
`

export type Props = {
  handleSubmit: (e: Event) => void
}

const Contact: React.SFC<{}> = (props: any) => {
  const {handleSubmit, pristine, reset, submitting} = props
  return (
    <View>
      <form onSubmit={e => {
        props.handleSubmit(e)
      }}>
        <InputField
          label="お名前"
          name={form.name.name}
          placeholder="お名前"
          type={InputType.text}
          validate={form.name.validators}
        />
        <InputField
          label="Eメール"
          name={form.email.name}
          placeholder="Eメール"
          type={InputType.email}
          validate={form.email.validators}
        />
        <TextareaField
          rows={5}
          label="内容"
          name={form.body.name}
          placeholder="内容"
          validate={form.body.validators}
        />
        <ButtonGroup>
          <Button type={BUTTON_TYPES.submit} disabled={!props.anyTouched || !props.valid}>
            送信する
          </Button>
        </ButtonGroup>
        
        <Note marginTop="60px" align={Align.center}>
          <Link to="/privacypolicy">
            <TextLink>
              プライバシーポリシー
            </TextLink>
          </Link>
        </Note>
        
      </form>
    </View>
  )
}

export default Contact

