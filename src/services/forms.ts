import {FieldValue, Validator} from 'redux-form'
import * as validator from 'validator'

const createFormValidator = (validator: Validator, msg: string) => {
  return (value: FieldValue, allValues?: any, props?: any) => {
    return validator(value, allValues, props) ? msg : undefined
  }
}

const required = createFormValidator((value: FieldValue) => {
  return value === undefined || value === null || value === ''
}, '必須項目です。')

const maxLength = (max: any) =>
  createFormValidator(
    (value: FieldValue) => max < value.length,
    `入力が長すぎます。${max}文字以内です。`
  )

const minLength = (min: any) =>
  createFormValidator(
    (value: FieldValue) => min > value.length,
    `入力が短すぎます。${min}文字以上です。`
  )

const isEmail = createFormValidator(
  (value: FieldValue) => !validator.isEmail(value),
  `メールアドレスを入力してください。`
)

export const form = {
  body: {
    name: 'body',
    validators: [required, maxLength(1000)]
  },
  email: {
    name: 'email',
    validators: [required, isEmail]
  },
  name: {
    name: 'name',
    validators: [required, maxLength(100)]
  }
}
