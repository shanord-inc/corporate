import {schema} from 'normalizr'
import {Action} from '../types'

export enum ActionTypeKeys {
  FETCH_POSTS = 'fetch_posts',
  FETCH_POST_DETAILS = 'fetch_post_detail',
  FETCH_WORKS = 'fetch_works',
  FETCH_SITE = 'fetch_site',
  FETCH_PAGES = 'fetch_pages',
}

export interface FetchEntityActionType extends Action {
  type: string,
  meta: {
    result?: string[],
  },
  payload: any
}

export type ActionTypes =
  | FetchEntityActionType


