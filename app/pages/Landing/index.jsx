import React from 'react';
import css from './index.styl';

function Landing() {
  return (
    <main>
      {/* Header */}
      <header>
        <nav>
          <img src="/logo-gold.png" alt="logo-gold" />
          <ul>
            <li>Услуги и цены</li>
            <li>Довольные клиенты</li>
            <li>О нас</li>
            <li>Статьи</li>
            <li>Контакты</li>
          </ul>
          <div className={css.contacts}>
            <a href="tel:+7 (495) 136-64-65">+7 (495) 136-64-65</a>
            <p>Без выходных</p>
          </div>
        </nav>
        <div className={css.container}>
          <p className={css.selfWritingText}>
            --- Это самопечатающийся текст
          </p>
          <h1>Ремонт швейцарских часов в центре Москвы</h1>
          <img src="/logo-wh.png" alt="logo-whit" />
          <button type="button" className={css.default}>
            Узнать стоимость ремонта
          </button>
        </div>
      </header>

      {/* Middle */}
      <section id={css.middle}>
        <h2>Когда часы приносят нам</h2>
        <div>
          <ul>
            <li>Отстают / спешат</li>
            <li>Не хватает запаса хода</li>
            <li>Разбилось стекло</li>
            <li>Другие отказались делать</li>
            <li className={css.withButton}>
              <button type="button" className={css.default}>
                Читать отзывы о нас
              </button>
            </li>
          </ul>
          <img src="/middle.png" alt="clocks" />
          <ul>
            <li>Остановились</li>
            <li>Поломка хронографа</li>
            <li>Разрядился элемент питания</li>
            <li>Нужна чистка / полировка</li>
            <li className={css.withButton}>
              <button type="button" className={css.default}>
                Услуги и базовые цены
              </button>
            </li>
          </ul>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts">
        <div>
          <h2>
            Контакты и режим работы
          </h2>
          <div>
            <img src="/metro-icon.png" alt="metro-icon" />
            <p>Цветной бульвар</p>
            <p>(3 минуты пешком</p>
          </div>
          <p>
            Единственный выход из метро, налево
            300 метров по прямой и еще 100 метров
            налево
          </p>
          <p>
            Будни 10:00-21:00
          </p>
          <p>
            Выходные 11:00-20:00
          </p>
          <h3>Садовая-Самотёчная улица, 15/1</h3>
        </div>
        <div>
          <a href="tel:+7 (495) 136-64-65">
            +7 (495) 136-64-65
          </a>
          <p>
            Авто вы можете припарковать
            перед входом бесплатно.
          </p>
          <p>
            Также на городской парковке на 1-м
            Волконском переулке всегда есть места.
            До нас: 1 мин. пешком
          </p>
          <button type="button" className={css.default}>
            Где проехать и припарковаться
          </button>
        </div>
      </section>

      {/* Map */}
      <section id="map">
        Карта
      </section>

      {/* Footer */}
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
    </main>
  );
}

export default Landing;
