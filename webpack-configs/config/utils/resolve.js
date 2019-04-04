import path from 'path';

export default function resolver(props) {
  const { DIR } = props;

  return {
    modules: [DIR, 'node_modules'],
    mainFiles: [
      'index.js',
      'index.jsx',
    ],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      app: path.join(DIR, 'app'),
      build: path.join(DIR, 'build'),
      server: path.join(DIR, 'server'),
      'webpack-configs': path.join(DIR, 'webpack-configs'),
    },
  };
}
