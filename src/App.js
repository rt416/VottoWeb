/* @flow */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import fontAwesome from 'font-awesome/css/font-awesome.css';

const appBarStyle = {
  flex: 'none',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const contentStyle = {
  flex: '1 0 auto',
  position: 'relative',
  overflowY: 'auto',
};

const App = ({ children } : { children: React$Element<{}>}) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div style={containerStyle}>
      <div style={appBarStyle}>
        <AppBar
          title="Votto - sometimes, normal discounts are just too boring"
          iconClassNameLeft={`${fontAwesome.fa} ${fontAwesome.faCoffee}`}
        />
      </div>
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  </MuiThemeProvider>
);

export default App;
