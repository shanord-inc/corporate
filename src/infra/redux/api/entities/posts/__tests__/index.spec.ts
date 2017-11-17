import {PostListType} from '../../../../../../domain/models/Post'
import {ActionTypeKeys} from '../../../types'
import reducer from '../../posts'

const payload: PostListType = {
  1: {
    content: {rendered: 'content'},
    date: '2017-01-01',
    id: '1',
    title: {rendered: 'title'},
  }
}
const payload2: PostListType = {
  2: {
    content: {rendered: 'content'},
    date: '2017-01-01',
    id: '1',
    title: {rendered: 'title'},
  }
}

describe('reducer', () => {
  it('initial stateが {}', () => {
    expect(reducer(undefined, {type: ''})).toEqual({})
  })

  it('FETCH_POSTS reducerの形式が正しい', () => {
    expect(
      reducer({}, {
        meta: {
          result: ['1'],
        },
        payload,
        type: ActionTypeKeys.FETCH_POSTS,
      })
    ).toEqual(payload)
  })

  it('追加で取得する形式が正しい', () => {
    expect(
      reducer(payload, {
        meta: {
          result: ['1'],
        },
        payload: payload2,
        type: ActionTypeKeys.FETCH_POSTS,
      })
    ).toEqual({...payload, ...payload2})
  })
})

