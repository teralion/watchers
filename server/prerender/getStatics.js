import fs from 'fs';

const app = /^app@\w{12}.js$/;
const css = /^server@\w{12}.css$/;
const s = {
  app: '',
  css: '',
};

const files = fs.readdirSync('build');

function isStaticsFound() {
  return Boolean(s.app) && Boolean(s.css);
}

function getStatics() {
  if (process.env.NODE_ENV === 'development') {
    return {};
  }

  // s do not change on production
  if (isStaticsFound()) {
    return s;
  }

  /* eslint-disable-next-line no-plusplus */
  for (let i = 0; i < files.length; i++) {
    const filename = files[i];

    if (app.test(filename)) {
      s.app = filename;
    }

    if (css.test(filename)) {
      s.css = filename;
    }

    if (isStaticsFound()) {
      return s;
    }
  }

  return {};
}

export default getStatics;
