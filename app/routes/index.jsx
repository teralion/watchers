import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from 'app/pages/Landing';
import News from 'app/pages/News';

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Landing} exact />
      <Route path="/news" component={News} />
    </Switch>
  );
}

export default Routes;
