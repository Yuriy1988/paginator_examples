/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import App from './modules/App/App';
import TestPage from '../client/modules/Test/pages/TestPage';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/example" />
    <Route
      path="/example"
      component={TestPage}
    />
  </Route>
);
