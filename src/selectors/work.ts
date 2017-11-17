import {createSelector} from 'reselect'
import * as entitiesSelectors from '../infra/redux/api/entities/selectors'
import WorkRepository from '../infra/repository/WorkRepository'

export const getWorks = createSelector(
  entitiesSelectors.getWorks,
  works => {
  return works.map(work => {
    return {
      awards: work.acf.awards,
      description: work.acf.description,
      thumbnail: work.acf.thumbnail,
      title: work.acf.title,
      url: work.acf.url
    }
  })
})

export const hasNext = createSelector(
  () => WorkRepository.create().hasNext(),
  (hasNext): boolean => hasNext
)
