import {WorkListType} from '../../../../../../domain/models/Work'
import {ActionTypeKeys} from '../../../types'
import reducer, {actions} from '../../works'

const payload: WorkListType = {
  1: {
    acf: {
      awards: ['award1', 'award2'],
      description: 'description',
      thumbnail: 'thumbnail',
      title: 'title',
      url: 'url',
    },
    id: '1',
  }
}

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {type: ''})).toEqual({})
  })

  it('should handle FETCH_WORKS', () => {
    expect(
      reducer({}, {
        meta: {
          result: ['1'],
        },
        payload,
        type: ActionTypeKeys.FETCH_WORKS,
      })
    ).toEqual(
      {
        1: {
          acf: {
            awards: ['award1', 'award2'],
            description: 'description',
            thumbnail: 'thumbnail',
            title: 'title',
            url: 'url',
          },
          id: '1',
        }
      }
    )
  })
})
