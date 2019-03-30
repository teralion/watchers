import fs from 'fs';
import template from 'build/main.mustache'; /* eslint-disable-line */
import request from 'request';

async function getTemplates(ctx) {
  ctx.body = template.render({
    title: 'Watchers - сервисный центр швейцарских часов',
  });
}

function getDevAsset(ctx) {
  if (GLOBALS.DEV_SERVER_PORT) {
    ctx.body = request(`http://localhost:${GLOBALS.DEV_SERVER_PORT}/assets/${ctx.assetFilename}`);
  } else {
    console.warn('NO DEV_SERVER_PORT');
  }
}

function getProdAsset(ctx) {
  ctx.body = fs.createReadStream(`build/${ctx.assetFilename}`);
}

function getAsset(ctx) {
  if (NODE_ENV === 'development') {
    getDevAsset(ctx);
  } else if (NODE_ENV === 'production') {
    getProdAsset(ctx);
  }
}

export const all = getTemplates;
export const assets = getAsset;
