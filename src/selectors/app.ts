import {createSelector} from 'reselect'
import * as appSelectors from '../infra/redux/app/selectors'

export const getLoading = createSelector(appSelectors.getBusy, busy => busy)

export const getNewsPage = createSelector(appSelectors.getNewsPage, val => val)

export const getToast = createSelector(appSelectors.getToast, val => val)
