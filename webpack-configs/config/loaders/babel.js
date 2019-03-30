
export default function configureBabel() {
  const presets = [
    '@babel/preset-env',
  ];

  const plugins = [
    'add-module-exports',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-syntax-dynamic-import',
  ];

  return {
    test: /\.js|jsx$/,
    exclude: /node_modules(?!.+-es6)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets,
        plugins,
        babelrc: false,
      },
    },
  };
}
