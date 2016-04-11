import React from 'react';
import { render } from 'react-dom';
import Gamble from './gamble/Gamble';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render((
  <Gamble />
), document.getElementById('app'));
