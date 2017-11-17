import {combineReducers} from 'redux'
import {PageType} from '../../../../domain/models/Page'
import {PostListType} from '../../../../domain/models/Post'
import {SiteType} from '../../../../domain/models/Site'
import {WorkListType} from '../../../../domain/models/Work'
import pages from './pages/pages'
import posts from './posts'
import site from './site/index'
import works from './works'

export type EntitiesState = {
  posts: PostListType
  works: WorkListType
  site: SiteType
  pages: PageType[]
  [key: string]: any
};

export const reducers = {
  pages,
  posts,
  site,
  works,
}

export default combineReducers<EntitiesState>(reducers)
