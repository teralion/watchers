import path from 'path';
/* eslint-disable-next-line */
import MiniCssPlugin from 'mini-css-extract-plugin';
import autoprefixer from 'autoprefixer';

function common(props) {
  const { DIR, production = true } = props;

  return [
    {
      loader: 'css-loader',
      options: {
        modules: true,
        sourceMap: true,
        localIdentName: '[name]-[local]-[hash:base64:5]',
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
        import: [path.join(DIR, 'app', 'styles', 'index.styl')],
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
