import * as React from 'react'
import {BaseFieldProps, Field, WrappedFieldProps} from 'redux-form'
import {InputType} from '../../components/atoms/Input'
import {State} from '../../infra/redux'

type TextAreaProps = {
  rows?: number
}

export type Props = {
  label: string
  placeholder: string
  type?: InputType
} & BaseFieldProps & TextAreaProps;

// FIXME: 型
export const withReduxFormField = (ComposedComponent: any) => {
  const renderField: React.SFC<WrappedFieldProps<State>> = ({input, ...p}: any) => {
    return (
      <ComposedComponent
        {...input}
        {...p}
      />
    )
  }
  return (props: Props) => {
    return (
      <Field
        component={renderField}
        {...props}
      />
    )
  }
}
