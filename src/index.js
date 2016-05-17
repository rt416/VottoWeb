/* @flow */
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import CurrentGamble from './gamble/CurrentGamble';
import Questionnaire from './questionnaire/view/Questionnaire';
import { store, history } from './rootReducer';
import { hydrateFromFirebase } from './gamble/actions/actions';
import './global.css';

injectTapEventPlugin();
store.dispatch(hydrateFromFirebase());

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={CurrentGamble} />
        <Route path="/questionnaire" component={Questionnaire} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
