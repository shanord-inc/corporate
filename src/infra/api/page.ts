import client from 'axios'
import {WP_API_ENDPOINT} from '../../config'

export const getPage = (params: any = {}) => {
  return client
  .get(`${WP_API_ENDPOINT}/pages`, {params: params})
}

