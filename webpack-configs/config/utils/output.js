import path from 'path';

export function browser(props) {
  const { DIR } = props;

  return {
    filename: 'app.js',
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
