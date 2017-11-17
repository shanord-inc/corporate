import {ISiteRepository} from '../../domain/interfaces'
import Site from '../../domain/models/Site'
import * as api from '../../infra/api'
import * as entitiesSelectors from '../redux/api/entities/selectors'
import ReduxProvider from '../redux/ReduxProvider'

let singleton: ISiteRepository | null = null

export default class SiteRepository implements ISiteRepository {
  redux: ReduxProvider

  constructor() {
    this.redux = ReduxProvider.create()
  }

  static create(): ISiteRepository {
    if (singleton) {
      return singleton
    }
    return singleton = new SiteRepository()
  }

  async get(): Promise<Site> {
    await api.site.getSite()
    return new Site(entitiesSelectors.getSite(this.redux.getState()))
  }

}
