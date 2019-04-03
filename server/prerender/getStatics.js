import fs from 'fs';

const s = {
  app: '',
  css: '',
};

const files = fs.readdirSync('build');

function isStaticsFound() {
  if (process.env.NODE_ENV === 'production') {
    return Boolean(s.app) && Boolean(s.css);
  } if (process.env.NODE_ENV === 'development') {
    return Boolean(s.app);
  }
}

function getRegs() {
  if (process.env.NODE_ENV === 'production') {
    return {
      app: /^app@\w{12}\.js$/,
      css: /^server@\w{12}\.css$/,
    };
  }

  return {
    app: /^app\.js$/,
    css: /^server\.css$/,
  };
}

function development() {
  const { app } = getRegs();

  /* eslint-disable-next-line no-plusplus */
  for (let i = 0; i < files.length; i++) {
    const filename = files[i];

    if (app.test(filename)) {
      s.app = filename;
    }

    if (isStaticsFound()) {
      return s;
    }
  }

  return s;
}

function production() {
  // s do not change on production
  if (isStaticsFound()) {
    return s;
  }

  const { app, css } = getRegs();

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

  return s;
}

function getStatics() {
  if (process.env.NODE_ENV === 'production') {
    return production();
  }

  return development();
}

export default getStatics;
