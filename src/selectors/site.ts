import {createSelector} from 'reselect'
import * as entitiesSelectors from '../infra/redux/api/entities/selectors'

export const getSite = createSelector(
  entitiesSelectors.getSite,
  site => site
)
