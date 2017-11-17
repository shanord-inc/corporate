import * as api from '../../infra/api'
import AppState from '../../services/AppState'
import {IWorkRepository} from '../../domain/interfaces'
import WorkRepository from '../../infra/repository/WorkRepository'
import * as app from '../application'

const workRepo: IWorkRepository = WorkRepository.create()

export const getWork = async () => {
  if (AppState.create().getWorkPage() === 0) {
    try {
      AppState.create().toBusy()
      await workRepo.get()
      AppState.create().toUnbusy()
    } catch(e) {
      app.addToast('情報の取得でできませんでした。')
    }
  }
}

export const next = async () => {
  AppState.create().toBusy()
  await workRepo.getNext().catch(e => {
    AppState.create().toUnbusy()
    throw e
  })
  AppState.create().toUnbusy()
}

