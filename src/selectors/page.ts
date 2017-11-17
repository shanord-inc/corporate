import {createSelector} from 'reselect'
import * as entitiesSelectors from '../infra/redux/api/entities/selectors'

export const getPages = createSelector(
  entitiesSelectors.getPages,
  pages => {
    return pages.map((page: any) => {
      return {
        content: page.content.rendered,
        id: page.id,
        slug: page.slug,
        title: page.title.rendered,
      }
    })
  }
)

export const getPageBySlug = (slug: string) =>
  createSelector(
    getPages,
    pages => {
      const _page = pages.filter((page: any) => page.slug.toString() === slug)
      return _page.length > 0 ? _page[0] : {}
    }
  )
