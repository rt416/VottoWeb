/* @flow */
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './gamble/reducers/reducers';

injectTapEventPlugin();

render((
  <Provider store={configureStore()}>
    <App />
  </Provider>
), document.getElementById('app'));
