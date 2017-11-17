import * as React from 'react'
import styled, {withProps} from '../../../styles/themed-components'
import BaseInput, {InputType} from '../../atoms/Input'
import {colors} from '../../../styles/variables/colors'
import media from '../../../styles/mixins/media'
import transition from '../../../styles/mixins/transition'

const View = styled.div`
  margin-top: 10px;
  ${media.tablet`
    margin-top: 30px;
  `}
`
const InputOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  ${media.tablet`
    align-items: center;
    flex-direction: row;
  `}
`
const Input = withProps<any, HTMLDivElement>(styled(BaseInput))`
  width: 100%;
  padding: 12px 10px;
  border: 1px solid #999;
  font-size: 16px;
  
  ${media.tablet`
    width: 1%;
    flex: 1 1 auto;
  `}
  
  ${transition({duration: 0.4, property: 'border-color'})}
  
  ${(props: any) => props.hasError ? `
    border-color: ${colors.error};
  ` : ``}
`
const Label = styled.label`
  min-width: 5em;
  margin: 0 10px 0 0;
  font-size: 16px;
`
const Error = styled.label`
  text-align: right;
  display: block;
  min-width: 5em;
  min-height: 1.8em;
  margin: 0 10px;
  font-size: 16px;
  color: ${colors.error};
`

export type Props = {
  name?: string
  onChange: (val: any) => void // 型
  onFocus: (val: any) => void
  onBlur: (val: any) => void
  type?: InputType
  value?: string
  meta: {
    error: string,
    invalid: boolean,
    touched: boolean,
    valid: boolean,
    warning: any
  },
  label: string,
};

export default function InputField({
                                     meta,
                                     label,
                                     ...props
}: Props) {
  const hasError = meta.touched && meta.error
  return (
    <View>
      <InputOuter>
        <Label>{label}</Label>
        <Input hasError={hasError} {...props} />
      </InputOuter>
      <Error>
        {hasError &&
          <span>{meta.error}</span>
        }
      </Error>
    </View>
  )
}

