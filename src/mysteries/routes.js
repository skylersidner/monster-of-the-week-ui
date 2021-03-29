import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { MysteriesLayout } from './layouts'

export function MysteryRoutes() {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={path} component={MysteriesLayout} />
      </Switch>
    </>
  )
}

export default MysteryRoutes;