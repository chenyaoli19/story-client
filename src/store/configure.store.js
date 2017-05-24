import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducer'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

export default function configureStore(initialStore){
  return createStore(
    rootReducer,
    initialStore,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  )
}
