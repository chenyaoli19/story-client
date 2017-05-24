import * as types from '../../../constants/actionTypes'
import storyApi from '../../../api/mockStoryApi'

export function loadStoriesSuccess(stories){
  return {type: types.LOAD_STORIES_SUCCESS, stories}
}

export function loadStories(){
  return function(dispatch){
    return storyApi.getAllStories().then(stories => {
      dispatch(loadStoriesSuccess(stories))
    }).catch(error => {
      throw(error)
    })
  }
}
