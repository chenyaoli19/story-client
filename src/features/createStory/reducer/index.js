import {combineReducers} from 'redux'
import stories from './createStory.reducer.js'

const rootReducer = combineReducers({
  stories
})

export default rootReducer
