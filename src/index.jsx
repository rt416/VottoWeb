/* @flow */
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import gamblersApp from './gamble/reducers/reducers';
injectTapEventPlugin();

const store = createStore(gamblersApp);
render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));
