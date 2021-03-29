import React from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

function DashboardLayout() {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={path} render={() => <h1>Dashboard Content</h1>} exact />
      </Switch>
    </>
  )
};

export { DashboardLayout };