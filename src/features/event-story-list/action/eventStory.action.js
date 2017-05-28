import * as types from '../../../constants/actionTypes'
import storyApi from '../../../api/mockStoryApi'

function loadStoriesSuccess(stories){
  return {type: types.LOAD_STORIES_LIST_SUCCESS, stories}
}

function requestStories(eventId){
  return {
    type: types.FETCHING_STORY_LIST, eventId
  }
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
