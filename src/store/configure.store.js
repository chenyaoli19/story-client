import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../features/createStory/reducer'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(initialStore){
  return createStore(
    rootReducer,
    initialStore,
    applyMiddleware(reduxImmutableStateInvariant())
  )
}
