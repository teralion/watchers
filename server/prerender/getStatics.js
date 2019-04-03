import allowedBuildFiles from '../utils/allowedBuildFiles';

const statics = {
  js: [],
  css: [],
};

const regs = {
  js: /\.js$/,
  css: /\.css$/,
};

const files = allowedBuildFiles;

function placeFilename(filename) {
  if (regs.js.test(filename)) {
    statics.js.push({ name: filename });
  }

  if (regs.css.test(filename)) {
    statics.css.push({ name: filename });
  }
}

function isStatics() {
  return (
    Boolean(statics.js.length)
    && Boolean(statics.css.length)
  );
}

function getStatics() {
  // caching
  if (isStatics()) {
    return statics;
  }

  /* eslint-disable-next-line no-plusplus */
  for (let i = 0; i < files.length; i++) {
    placeFilename(files[i]);
  }

  return statics;
}

export default getStatics;
