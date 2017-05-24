import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';
import configureStore from './store/configure.store.js'
import { Provider } from 'react-redux'
import { loadStories } from './features/event-story-list/action/eventStory.action'

const store = configureStore()
store.dispatch(loadStories())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
