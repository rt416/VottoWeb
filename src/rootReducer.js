/* @flow */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { gamblersApp } from './gamble/reducers/reducers';

export const store = createStore(
  combineReducers({
    gamblersApp,
    routing: routerReducer,
  }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export const history = syncHistoryWithStore(browserHistory, store);
