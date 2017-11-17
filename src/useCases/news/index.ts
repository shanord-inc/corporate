import {IPostRepository} from '../../domain/interfaces'
import PostRepository from '../../infra/repository/PostRepository'
import AppState from '../../services/AppState'
import * as app from '../application'

const newsRepo: IPostRepository = PostRepository.create()

export const getNewsById = async (id: string) => {
  try {
    AppState.create().toBusy()
    const r = await newsRepo.getById(id)
    AppState.create().toUnbusy()
    return r
  } catch (e) {
    app.addToast('情報の取得でできませんでした。')
  }
}

export const getNews = async () => {
  if (AppState.create().getNewsPage() === 0) {
    try {
      AppState.create().toBusy()
      await newsRepo.get()
      AppState.create().toUnbusy()
    } catch (e) {
      app.addToast('情報の取得でできませんでした。')
    }
  }
}

export const next = async () => {
  AppState.create().toBusy()
  await newsRepo.getNext().catch(e => {
    AppState.create().toUnbusy()
    throw e
  })
  AppState.create().toUnbusy()
}
