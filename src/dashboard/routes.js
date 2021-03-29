import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { DashboardLayout } from './layouts'

export function DashboardRoutes() {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={path} component={DashboardLayout} />
      </Switch>
    </>
  )
}

export default DashboardRoutes;