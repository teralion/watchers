import React from 'react';
import ReactDOM from 'react-dom/server';
import { matchPath } from 'react-router';

import routes from 'app/routes/routes';
/* eslint-disable-next-line */
import template from 'build/main.mustache';

function prerender(ctx) {
  /*
  * StaticRouter does not work in production build.
  * God knows why.
  * */

  const { component: Component } = routes.find(
    route => matchPath(ctx.path, route),
  ) || {};

  let html = '';

  if (NODE_ENV === 'production') {
    html = ReactDOM.renderToString(
      <Component />,
    );
  }

  ctx.status = 200;
  ctx.body = template.render({ html });
}

export default prerender;
