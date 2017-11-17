import {IPageRepository} from '../../domain/interfaces'
import Page, {PageType} from '../../domain/models/Page'
import * as api from '../../infra/api'
import {actions} from '../redux/api/entities/pages/pages'
import * as entitiesSelectors from '../redux/api/entities/selectors'
import ReduxProvider from '../redux/ReduxProvider'

let singleton: IPageRepository | null

export default class PageRepository implements IPageRepository {
  redux: ReduxProvider
  pages: Page[]


  constructor() {
    this.redux = ReduxProvider.create()
  }

  static create() {
    if (singleton) {
      return singleton
    }
    return singleton = new PageRepository()
  }

  async getById(id: string): Promise<Page | null> {
    const pages: PageType[] = entitiesSelectors.getPages(this.redux.getState())
    const p = pages.filter(page => {
      return page.id === id
    })
    return p.length > 0
      ? new Page(p[0])
      : null
  }

  async getBySlug(slug: string): Promise<Page | null> {
    const pages: PageType[] = entitiesSelectors.getPages(this.redux.getState())
    const p = pages.filter(page => {
      return page.slug === slug
    })
    return p.length > 0 ? new Page(p[0]) : null
  }

  async get(): Promise<Page[]> {
    const res = await api.page.getPage()
    this.redux.dispatch(actions.getPages(res.data))
    const pages: PageType[] = entitiesSelectors.getPages(this.redux.getState())
    return pages.map(page => {
      return new Page(page)
    })
  }

}

