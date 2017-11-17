import {reset as reduxFormReset} from 'redux-form'
import {IInquiryRepository} from '../../domain/interfaces'
import ReduxProvider from '../../infra/redux/ReduxProvider'
import InquiryRepository from '../../infra/repository/InquiryRepository'
import AppState from '../../services/AppState'
import * as app from '../application'

const inquiryRepo: IInquiryRepository = InquiryRepository.create()

export const postContact = async () => {
  try {
    AppState.create().toBusy()
    const res = await inquiryRepo.post()
    AppState.create().toUnbusy()
    if (res.error_count === 0) {
      app.addToast('お問い合わせありがとうございました。')
    } else {
      app.addToast('送信に失敗しました。')
    }
  } catch (e) {
    app.addToast('送信に失敗しました。')
  }
}

export const reset = (formId: string) => {
  ReduxProvider.create().dispatch(reduxFormReset(formId))
}
