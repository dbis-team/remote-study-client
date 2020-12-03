import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import * as routes from 'constants/routes';

import DashboardPage from 'pages/Dashboard';
import EducationSetsPage from 'pages/EducationSets';
import SchedulePage from 'pages/Schedule';

const AuthenticatedRouter: React.FC = () => (
  <Switch>
    <Route path={routes.DASHBOARD_PATH}>
      <DashboardPage />
    </Route>
    <Route path={routes.EDUCATION_SETS_PATH}>
      <EducationSetsPage />
    </Route>
    <Route path={routes.SCHEDULE_PATH}>
      <SchedulePage />
    </Route>
    <Route path="*">
      <Redirect to={routes.SCHEDULE_PATH} />
    </Route>
  </Switch>
);

export default AuthenticatedRouter;
