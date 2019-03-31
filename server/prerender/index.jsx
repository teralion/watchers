import React from 'react';
import ReactDOM from 'react-dom/server';

import Landing from 'app/pages/Landing';
import template from 'build/main.mustache'; /* eslint-disable-line */

function prerender(ctx) {
  const context = {};

  const html = ReactDOM.renderToString(
    <Landing />,
  );

  if (context.url) {
    ctx.set('Location', context.url);
    ctx.status = 302;

    return ctx;
  }

  ctx.status = 200;
  ctx.body = template.render({ html });
}

export default prerender;
