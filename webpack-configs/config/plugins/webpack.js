import webpack from 'webpack';

const hmr = () => (
  new webpack.HotModuleReplacementPlugin()
);

export default hmr;
