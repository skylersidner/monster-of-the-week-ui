import React from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

function MysteriesLayout() {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={path} render={() => <h1>Mysteries Content</h1>} exact />
      </Switch>
    </>
  )
};

export { MysteriesLayout };