/* @flow */
import React from 'react';
import CurrentGamble from './gamble/CurrentGamble';
import AppBar from 'material-ui/lib/app-bar';
require('font-awesome/css/font-awesome.css');

const App = () => (
  <div>
    <AppBar
      title="Votto - sometimes, normal discounts are just too boring"
      iconClassNameLeft="fa fa-coffee"
    />
    <CurrentGamble />
  </div>
);

export default App;
