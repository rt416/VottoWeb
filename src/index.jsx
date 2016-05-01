/* @flow */
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import 'font-awesome/css/font-awesome.css';

import { gamblersApp, buildInitialState as gamblerInitial } from './gamble/reducers/reducers';
import App from './App';
import CurrentGamble from './gamble/CurrentGamble';

injectTapEventPlugin();

const store = createStore(
  combineReducers({
    gamblersApp,
    routing: routerReducer,
  }),
  { gamblersApp: gamblerInitial() },
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

const history = syncHistoryWithStore(browserHistory, store);

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CurrentGamble} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
