/* eslint-disable-next-line */
import UglifyJs from 'uglifyjs-webpack-plugin';
/* eslint-disable-next-line */
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default function optimize(props) {
  const { development = true } = props;

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
        styles: {
          name: 'css',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [
      new UglifyJs({
        parallel: true,
        sourceMap: true,
        cache: true,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
  };
}
