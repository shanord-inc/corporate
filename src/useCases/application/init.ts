import {IPageRepository, ISiteRepository} from '../../domain/interfaces'
import PageRepository from '../../infra/repository/PageRepository'
import SiteRepository from '../../infra/repository/SiteRepository'
import AppState from '../../services/AppState'

const siteRepo: ISiteRepository = SiteRepository.create()
const pageRepo: IPageRepository = PageRepository.create()

export const init = async () => {
  await siteRepo.get()
  await pageRepo.get()
  AppState.create().toInitialized()
}
