import allowedBuildFiles from '../utils/allowedBuildFiles';

const statics = {
  js: [],
  css: [],
};

const tests = {
  js: v => /\.js$/.test(v),
  css: v => /\.css$/.test(v) && !v.includes('server'),
};

const files = allowedBuildFiles;

function placeFilename(filename) {
  const testNames = Object.keys(tests);

  /* eslint-disable-next-line no-plusplus */
  for (let i = 0; i < testNames.length; i++) {
    const testName = testNames[i];
    const isAllowed = tests[testName](filename);

    if (isAllowed) {
      return statics[testName].push({ name: filename });
    }
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
