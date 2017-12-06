import {denormalize, schema} from 'normalizr'
import {createSelector} from 'reselect'
import {PageType} from '../../../../domain/models/Page'
import {PostType} from '../../../../domain/models/Post'
import {SiteType} from '../../../../domain/models/Site'
import {WorkType} from '../../../../domain/models/Work'
import {State} from '../../index'
import {PostSchema, WorkSchema} from '../schemata'
import {getApi, getPostsIds, getWorksIds} from '../selectors'
import {EntitiesState} from './index'
import Entity = schema.Entity

const getEntities = (state: State) => getApi(state).entities

export const getAll = (entities: EntitiesState, entity: Entity, ids: string[]) => {
  const key = entity.key
  const ret = denormalize({[key]: ids}, {[key]: [entity]}, entities)
  return ret[key]
}

export const getById = (entities: EntitiesState, entity: Entity, id: string) => {
  const key = entity.key
  const ret = denormalize({[key]: id}, {[key]: entity}, entities)
  const values = ret[key]
  return typeof values === 'object' ? values : null
}

export const getPostById = (id: string) => createSelector(
  getEntities,
  (entities): PostType | null => {
    return getById(entities, PostSchema, id)
  }
)

export const getPosts = createSelector(
  getEntities,
  getPostsIds,
  (entities, ids): PostType[] => {
    return getAll(entities, PostSchema, ids)
  }
)

export const getWorks = createSelector(
  getEntities,
  getWorksIds,
  (entities, ids): WorkType[] => {
    return getAll(entities, WorkSchema, ids)
  }
)

export const getPages = createSelector(
  getEntities,
  (entities: EntitiesState): PageType[] => {
    return entities.pages
  }
)

export const getSite = createSelector(
  getEntities,
  (entities: EntitiesState): SiteType => {
    return entities.site
  }
)
