import React from 'react';

import { Switch, Route } from 'react-router-dom';
// import NotFound, Unauthorized, etc.
import { routes as MysteryRoutes } from './mysteries';
import { routes as DashboardRoutes } from './dashboard';
import Layout from './common/Layout';

// TODO: refactor these components into the menu ENUM and use map?
function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Layout title="Dashboard">
          <DashboardRoutes />
        </Layout>
      </Route>
      <Route path="/mysteries">
        <Layout title="Mysteries">
          <MysteryRoutes />
        </Layout>
      </Route>
      <Route path="/monsters">
        <Layout title="Monsters">
          {/*<MonsterRoutes />*/}
        </Layout>
      </Route>
      <Route path="/minions">
        <Layout title="Minions">
          {/*<MinionsRoutes />*/}
        </Layout>
      </Route>
      <Route path="/locations">
        <Layout title="Locations">
          {/*<LocationRoutes />*/}
        </Layout>
      </Route>
      <Route path="/bystanders">
        <Layout title="Bystanders">
          {/*<BystanderRoutes />*/}
        </Layout>
      </Route>
      <Route component={() => <h1>404 Not Found!</h1>} />
    </Switch>
  )
}


export default Routes;