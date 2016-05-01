/* @flow */
import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

const App = ({ children } : { children: React$Element<{}>}) => (
  <div>
    <AppBar
      title="Votto - sometimes, normal discounts are just too boring"
      iconClassNameLeft="fa fa-coffee"
    />
    {children}
  </div>
);

export default App;
