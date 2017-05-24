export default function storyReducer(state = {}, action){
  switch(action.type){
    case 'CREATE_STORY':
      return Object.assign({}, action.story);
    default:
      return state;
  }
}
