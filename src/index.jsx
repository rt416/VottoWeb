/* @flow */
import React from 'react';
import { render } from 'react-dom';
import Gamblers from './gamble/Gamblers';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render((
  <Gamblers
    alpha={1.1}
    customerIncreaseRate={1.2}
    costToRevenue={0.8 / 3.5}
  />
), document.getElementById('app'));
