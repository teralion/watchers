import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

function getOptions(context) {
  const { DIR } = context;

  return {
    inject: 'body',
    template: path.join(DIR, 'server', 'templates', 'app.mustache'),
    filename: 'main.mustache',
  };
}

export default function applyHtml(context) {
  return new HtmlWebpackPlugin(getOptions(context));
}
