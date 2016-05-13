/* @flow */
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';

import { gamblersApp } from './gamble/reducers/reducers';

export const store = createStore(
  combineReducers({
    gamblersApp,
    routing: routerReducer,
  }),
  {},
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export const history = syncHistoryWithStore(browserHistory, store);
