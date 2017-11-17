import {IPageRepository} from '../../domain/interfaces'
import PageRepository from '../../infra/repository/PageRepository'

const pageRepo: IPageRepository = PageRepository.create()

export const getPages = async () => {
  await pageRepo.get()
}

