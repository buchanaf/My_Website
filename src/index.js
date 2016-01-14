import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

require('css/main.css');

window.onload = function initApp() {
  render((
    <Router history={createBrowserHistory()} onUpdate={() => window.scrollTo(0, 0)}>
      {routes}
    </Router>
  ), document.getElementById('app'));
};