import client from 'axios'
import {ACF_API_ENDPOINT} from '../../config'
import {actionCreators} from '../redux/api/entities/site/index'
import ReduxProvider from '../redux/ReduxProvider'

// FIXME: ISiteRepositoryで抽象化する
export const _get = (type: string, params: any = {}) => {
  return client
    .get(`${ACF_API_ENDPOINT}/${type}`, {params: params})
    .then((response: any) => {
      ReduxProvider.create().dispatch(actionCreators.getSite(response.data.acf))
    })
}

export const getSite = (params: any = {}) => {
  return _get('options/site', params)
}
