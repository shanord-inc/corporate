import client from 'axios'
import {WP_API_ENDPOINT, ACF_API_ENDPOINT} from '../../../config'
import {Params} from './types'

export const _getPosts = (post_type: string, params: Params = {}) => {
  return client.get(`${WP_API_ENDPOINT}/${post_type}`, {params: params})
}

export const _getAcf = (post_type: string, params: Params = {}) => {
  return client.get(`${ACF_API_ENDPOINT}/${post_type}`, {params: params})
}

export const getPosts = (params: Params = {}) => {
  return _getPosts('posts', params)
}

export const getPostById = (id: string, params: Params = {}) => {
  return _getPosts(`posts/${id}`, params)
}

export const getHistory = (params: Params = {}) => {
  return _getPosts('history', params)
}

export const getWork = (params: Params = {}) => {
  return _getAcf('work', {...params, orderby: 'menu_order'})
}
