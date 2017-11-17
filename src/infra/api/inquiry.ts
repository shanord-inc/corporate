import client from 'axios'
import {CONTACT_ENDPOINT} from '../../config/index'

export const post = (inquiry: any) => {
  const param = Object.keys(inquiry).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(inquiry[k])
  }).join('&')
  return client
  .post(CONTACT_ENDPOINT, param, {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  })
}

