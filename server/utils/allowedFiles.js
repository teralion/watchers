import fs from 'fs';

const files = fs.readdirSync('build');
const allowedFiles = [];

function getFileTests() {
  if (process.env.NODE_ENV === 'production') {
    return [
      v => /^app@\w{12}\.js$/.test(v),
      v => /^server@\w{12}\.css$/.test(v),
    ];
  }

  return [
    v => /^app\.js$/.test(v),
    v => /^server\.css$/.test(v),
  ];
}

const tests = getFileTests();

function isAllowed(filename) {
  /* eslint-disable-next-line no-plusplus */
  for (let i = 0; i < tests.length; i++) {
    const isPassed = tests[i](filename);

    if (isPassed) {
      return true;
    }
  }

  return false;
}

function isAllowedFiles() {
  return Boolean(allowedFiles.length);
}

function getAllowedFiles() {
  // caching
  if (isAllowedFiles()) {
    return allowedFiles;
  }

  /* eslint-disable-next-line no-plusplus */
  for (let i = 0; i < files.length; i++) {
    const filename = files[i];

    if (isAllowed(filename)) {
      allowedFiles.push(filename);
    }
  }

  return allowedFiles;
}

export default getAllowedFiles();
