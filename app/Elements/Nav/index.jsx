import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import css from './index.styl';

export default function Nav(props) {
  const { className } = props;

  return (
    <nav className={className}>
      <img src="/logo-gold.png" alt="logo-gold" />
      <ul>
        <li><a href="#middle">Услуги и цены</a></li>
        <li><a href="#">Довольные клиенты</a></li>
        <li><a href="#maps">О нас</a></li>
        <li><Link to="/news">Статьи</Link></li>
        <li><a href="#contacts">Контакты</a></li>
      </ul>
      <div className={css.contacts}>
        <a href="tel:+7 (495) 136-64-65">+7 (495) 136-64-65</a>
        <p>Без выходных</p>
      </div>
    </nav>
  );
}

Nav.propTypes = {
  className: T.string,
};
Nav.defaultProps = {
  className: '',
};
