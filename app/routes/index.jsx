import React from 'react';
import { Route, Switch } from 'react-router-dom';

//* pages
import Landing from 'app/pages/Landing';

function Routes() {
  return (
    <Switch>
      <Route path="*" component={Landing} />
    </Switch>
  );
}

export default Routes;
