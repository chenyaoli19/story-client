import {combineReducers} from 'redux'
import createStory from '../features/createStory/reducer/createStory.reducer.js'
import loadStory from '../features/event-story-list/reducer/eventStory.reducer.js'

const rootReducer = combineReducers({
  createStory,
  loadStory
})

export default rootReducer
