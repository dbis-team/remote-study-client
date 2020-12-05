import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import * as routes from 'constants/routes';

import RegistrationPage from 'pages/Registration';
import LoginPage from 'pages/Login';
import EmailVerification from 'pages/EmailVerification';
import CheckEmail from 'pages/CheckEmail';

const UnauthenticatedRouter: React.FC = () => (
  <Switch>
    <Route path={routes.REGISTRATION_PATH}>
      <RegistrationPage />
    </Route>
    <Route path={routes.LOGIN_PATH}>
      <LoginPage />
    </Route>
    <Route path={routes.EMAIL_VERIFICATION_PATH}>
      <EmailVerification />
    </Route>
    <Route path={routes.CHECK_YOUR_EMAIL_PATH}>
      <CheckEmail />
    </Route>
    <Route path="*">
      <Redirect to={routes.LOGIN_PATH} />
    </Route>
  </Switch>
);

export default UnauthenticatedRouter;
