import Model from '../lib/Model'
import {Validator} from '../lib/Validator'
import * as validators from '../lib/validators'

export type ContactModel = {
  name: string
  email: string
  body: string
}

export default class Contact extends Model<ContactModel> {

  public get validators(): {[key: string]: Validator[]} {
    return {
      body: [
        validators.maxLength(1000),
        validators.minLength(2)
      ],
      email: [
        validators.isEmail()
      ],
      name: [
        validators.maxLength(100),
        validators.minLength(2)
      ]
    }
  }

  public getValidator(key: string): Validator[] {
    return this.validators[key]
  }

  public async save(props: ContactModel) {
    this.validate('name')
    this.validate('email')
    this.validate('body')
    // process
  }
}
