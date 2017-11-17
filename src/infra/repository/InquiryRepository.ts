import {IInquiryRepository} from '../../domain/interfaces'
import Inquiry from '../../domain/models/Inquiry'
import * as api from '../../infra/api'
import * as formSelectors from '../../infra/redux/form/selectors'
import ReduxProvider from '../redux/ReduxProvider'

let singleton: IInquiryRepository | null = null

export default class InquiryRepository implements IInquiryRepository {
  redux: ReduxProvider

  constructor() {
    this.redux = ReduxProvider.create()
  }

  static create(): IInquiryRepository {
    if (singleton) {
      return singleton
    }
    return singleton = new InquiryRepository()
  }

  async post(inquiry?: Inquiry): Promise<any> {
    const _inquiry = {...inquiry, ...formSelectors.getContact(this.redux.getState()).values}
    return await api.inquiry.post(_inquiry).then((res) => {
      return res.data
    })
  }

}
