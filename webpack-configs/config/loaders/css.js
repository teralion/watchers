/* eslint-disable-next-line */
import MiniCssPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';

function common(props) {
  const { production = true } = props;

  return [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        localIdentName: '[name]-[local]-[hash:base64:5]',
        sourceMap: true,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: production,
        plugins() { return [autoprefixer]; },
      },
    },
    {
      loader: 'stylus-loader',
      options: {
        sourceMap: production,
        preferPathResolver: 'webpack',
      },
    },
  ];
}

export default function styl(props) {
  return {
    test: /\.styl$/,
    use: [
      MiniCssPlugin.loader,
      ...common(props),
    ],
  };
}
