import UglifyJs from 'uglifyjs-webpack-plugin'; /* eslint-disable-line */

export default function optimize(props) {
  const { development } = props;

  if (development) {
    return {};
  }

  return {
    splitChunks: {
      minChunks: 2,
      minSize: 1000,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimizer: [
      new UglifyJs({
        parallel: true,
        sourceMap: true,
        cache: true,
      }),
    ],
  };
}
