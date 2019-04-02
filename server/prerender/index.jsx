import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import Routes from 'app/routes';
/* eslint-disable-next-line */
import template from 'build/main.mustache';

function prerender(ctx) {
  const context = {};

  let html = '';

  if (process.env.NODE_ENV === 'production') {
    html = ReactDOM.renderToString(
      <StaticRouter location={ctx.url} context={context}>
        <Routes />
      </StaticRouter>,
    );
  }

  if (context.url) {
    ctx.redirect(context.url);
    ctx.status = 302;

    return ctx;
  }

  ctx.status = 200;
  ctx.body = template.render({ html });
}

export default prerender;
