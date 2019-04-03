import path from 'path';
import { server as entry } from './utils/entry';
import { server as output } from './utils/output';
import optimization from './utils/optimization';
import dotenv from './utils/dotenv';
import resolve from './utils/resolve';
import externals from './utils/externals';
import babel from './loaders/babel';
import mustache from './loaders/mustache';
import serverStyl from './loaders/css';
import statics from './loaders/statics';
import composeGlobals from './plugins/globals';
import extractStyl from './plugins/extractCss';
import environment from './plugins/environment';

const context = {
  DIR: path.resolve('./'),
};

dotenv(context);

export default function server(config) {
  const { production = false, development = true } = config;

  const props = {
    production,
    development,
    isBrowser: false,
    isServer: true,
    ...context,
  };

  return {
    target: 'node',
    mode: production ? 'production' : 'development',
    context: context.DIR,
    entry: entry(props),
    output: output(props),
    resolve: resolve(props),
    externals: externals(props),
    module: {
      rules: [
        babel(props),
        statics(),
        mustache(props),
        serverStyl(props),
      ],
    },
    plugins: [
      extractStyl(props),
      environment(props),
      composeGlobals(props),
    ],
    optimization: optimization(props),
  };
}
