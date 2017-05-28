import * as types from '../../../constants/actionTypes'

export default function eventStoryReducer(state = [], action){
  switch(action.type){
    case types.LOAD_STORIES_LIST_SUCCESS:
      return action.stories
    default:
      return state;
  }
}
