import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'

import 'semantic-ui-css/semantic.min.css'
import App from './App'

const store = createStore(combineReducers({
  form: formReducer,
}))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('app')
)

