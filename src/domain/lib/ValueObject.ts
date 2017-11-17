import * as validator from 'validator'
import {Validator} from './Validator'

declare const assert: any

export default class ValueObject {
  val: any
  validators: Validator[] = []

  constructor(val: any) {
    this.setValue(val)
  }

  private validate(val: any) {
    let errors: any = []
    const isValid = this.validators.every(validator => {
      const r = validator.validator(val)
      errors = {...errors, [validator.name]: validator, val: val}
      return r
    })
    return isValid ? null : errors
  }

  setValidators(validators: Validator[]) {
    this.validators = validators
  }

  setValue(val: any) {
    // TODO: assertion
    console.log(this.validate(val))
    this.val = val
  }

  get value(): any {
    return this.value
  }
}
