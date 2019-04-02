/* eslint-disable-next-line */
import MiniCssPlugin from 'mini-css-extract-plugin';

export default function extractStyl(props) {
  const { development = true } = props;

  const filename = development
    ? '[name].css'
    : '[name]@[hash:12].css'; // prevents caching

  return new MiniCssPlugin({ filename });
}
