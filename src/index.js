import React from 'react'
import ReactDOM from 'react-dom/client'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import reducers from 'redux/reducers'

import { Home } from 'pages';

import 'scss/_global.scss'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers(), composeEnhancers(applyMiddleware(sagaMiddleware)))
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Home />
  </Provider>
)
