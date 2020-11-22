import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import * as routes from 'constants/routes';

import RegistrationPage from 'pages/Registration';
import LoginPage from 'pages/Login';

const UnauthenticatedRouter: React.FC = () => (
  <Switch>
    <Route path={routes.REGISTRATION_PATH}>
      <RegistrationPage />
    </Route>
    <Route path={routes.LOGIN_PATH}>
      <LoginPage />
    </Route>
    <Route path="*">
      <Redirect to={routes.REGISTRATION_PATH} />
    </Route>
  </Switch>
);

export default UnauthenticatedRouter;
