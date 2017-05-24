import * as types from '../../../constants/actionTypes'

export function createStory(story){
  return { type: types.CREATE_STORY, story }
}
