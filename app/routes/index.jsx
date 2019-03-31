import React from 'react';
import { Route, Switch } from 'react-router';

import routes from 'app/routes/routes';

function Routes() {
  return (
    <div>
      <Switch>
        {routes.map(({ path, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            render={props => <C {...props} {...rest} />}
          />
        ))}
      </Switch>
    </div>
  );
}

export default Routes;
