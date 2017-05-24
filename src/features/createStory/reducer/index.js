import {combineReducers} from 'redux'
import story from './createStory.reducer.js'

const rootReducer = combineReducers({
  story
})

export default rootReducer
