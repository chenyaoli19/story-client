import * as types from '../../../constants/actionTypes'
export default function storyReducer(state = {}, action){
  switch(action.type){
    case types.CREATE_STORY:
      return Object.assign({}, action.story);
    default:
      return state;
  }
}
