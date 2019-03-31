/* eslint-disable-next-line */
import MiniCssPlugin from 'mini-css-extract-plugin';

export default function extractStyl(props) {
  const { production = true } = props;

  const filename = production
    ? '[name]@[hash:12].css'
    : '[name].css';

  return new MiniCssPlugin({ filename });
}
