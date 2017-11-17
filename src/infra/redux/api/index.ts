import { combineReducers } from 'redux'
import {EntitiesState} from './entities'
import entities from './entities'
import posts from './posts/index'
import postDetails from './postDetail/index'
import works from './works/index'
import {PostType} from '../../../domain/models/Post'

export type APIState = {
  entities: EntitiesState
  postDetails: {[id: string]: PostType}
  posts: string[]
  works: string[]
}

export const reducers = {
  entities,
  postDetails,
  posts,
  works,
}

export default combineReducers(reducers)
