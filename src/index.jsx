/* @flow */
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import 'font-awesome/css/font-awesome.css';

import App from './App';
import CurrentGamble from './gamble/CurrentGamble';
import { store, history } from './rootReducer';

injectTapEventPlugin();

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CurrentGamble} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
