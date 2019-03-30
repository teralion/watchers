import autoprefixer from 'autoprefixer';

function common(props) {
  const { production } = props;

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

export function styl(props) {
  return {
    test: /\.styl$/,
    use: [
      {
        loader: 'style-loader',
        options: {
          sourceMap: true,
        },
      },
      ...common(props),
    ],
  };
}

export function css(props) {
  return {
    test: /\.css$/,
    use: [...common(props)],
  };
}
