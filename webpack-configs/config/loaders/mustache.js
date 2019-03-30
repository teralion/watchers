
export default function applyMustache(props) {
  const { production } = props;

  return {
    test: /\.mustache$/,
    use: [
      {
        loader: 'mustache-loader',
        options: {
          noShortcut: true,
          tiny: Boolean(production),
        },
      },
    ],
  };
}
