import {assert} from '../../lib/assert'
import {Validator} from '../lib/Validator'

// FIXME: 型
export default class Model<P extends {[key: string]: any}> {
  props: P

  // static validators: { [key: string]: Validator[] }

  constructor(props: P) {
    this.props = props
  }

  public get validators(): {[key: string]: Validator[]} {
    return {}
  }

  public getValidator(key: string): Validator[] {
    return this.validators[key]
  }

  public validate(propName: string) {
    let errors: any = []
    const isValid = this.validators[propName].every(validator => {
      const val = this.props[propName]
      const r = validator.validator(val)
      errors = {...errors, [validator.name]: validator, val: val}
      return r
    })
    return isValid ? null : assert(errors)
  }
}
