import path from 'path';
import 'colors'; /* eslint-disable-line import/no-extraneous-dependencies */

const availableEnvs = ['development', 'production'];
const { NODE_ENV = 'development' } = process.env;

if (!availableEnvs.includes(NODE_ENV)) {
  console.log(
    'NODE_ENV is invalid'.yellow,
    `ONE OF ${JSON.stringify(availableEnvs)} required`.yellow,
    '\'development\' WILL BE USED'.green,
  );
}

function requireDotenv(filePath) {
  /* no build config for webpack-configs itself */
  require('dotenv').config({ path: filePath }); /* eslint-disable-line */
}

export default function getEnvVariables(context) {
  const { DIR } = context;

  const dotenvFiles = [
    path.join(DIR, '.env'),
    path.join(DIR, `.env.${NODE_ENV}`),
  ];

  dotenvFiles.forEach(requireDotenv);
}
