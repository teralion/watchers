import fs from 'fs';
import request from 'request';

function getDevAsset(ctx) {
  if (GLOBALS.DEV_SERVER_PORT) {
    ctx.body = request(`http://localhost:${GLOBALS.DEV_SERVER_PORT}/assets/${ctx.filename}`);
  } else {
    console.warn('NO DEV_SERVER_PORT');
  }
}

function getProdAsset(ctx) {
  ctx.body = fs.createReadStream(`build/${ctx.filename}`);
}

function getUnknownAsset(ctx) {
  ctx.body = 'No assets found';
  ctx.status = 404;
}

function getAsset(ctx) {
  if (process.env.NODE_ENV === 'development') {
    getDevAsset(ctx);
  } else if (process.env.NODE_ENV === 'production') {
    getProdAsset(ctx);
  } else {
    getUnknownAsset(ctx);
  }
}

export default getAsset;
