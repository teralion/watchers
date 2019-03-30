import path from 'path';

export function browser(props) {
  const { DIR } = props;

  return {
    filename: '[name].js',
    path: path.join(DIR, 'build'),
    publicPath: '/assets/',
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
