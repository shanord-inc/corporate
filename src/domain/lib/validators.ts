import * as validator from 'validator'
import {Validator} from './Validator'

export const maxLength = (max: number): Validator => ({
  name: 'maxLength',
  validator: (val: any) => val.length < max
})

export const minLength = (min: number): Validator => ({
  name: 'minLength',
  validator: (val: any) => val.length > min
})

export const isEmail = (): Validator => ({
  name: 'isEmail',
  validator: (val: any) => validator.isEmail(val)
})
