import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import * as routes from 'constants/routes';

import { RegistrationPage } from 'pages/Registration';
import { DashboardPage } from 'pages/Dashboard';

const RootRouter: React.FC = () => (
  <Switch>
    <Route path={routes.REGISTRATION_PATH}>
      <RegistrationPage />
    </Route>
    <Route path={routes.DASHBOARD_PATH}>
      <DashboardPage />
    </Route>
    <Route>
      <Redirect to={routes.REGISTRATION_PATH} />
    </Route>
  </Switch>
);

export { RootRouter };
