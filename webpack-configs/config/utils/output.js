import path from 'path';

export function browser(props) {
  const { DIR, production = true } = props;

  const filename = production
    ? '[name]@[hash:12].js' // used in prerender
    : '[name].js';

  return {
    filename,
    path: path.join(DIR, 'build'),
    publicPath: process.env.PUBLIC_PATH,
  };
}

export function server(props) {
  const { DIR } = props;

  return {
    filename: 'server.js',
    path: path.join(DIR, 'build'),
    libraryTarget: 'commonjs2',
  };
}
