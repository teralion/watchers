import React from 'react';

import css from './index.styl';

export default function Footer() {
  return (
    <footer>
      <img src="/logo-gold.png" alt="logo-gold" />
      <div>
        <p>ОГРН: 317746002020454</p>
        <a href="/policy">
          Политика конфиденциальности
        </a>
        <p>ИНН: 771004647806</p>
      </div>
    </footer>
  );
}
