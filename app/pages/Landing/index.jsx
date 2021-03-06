import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { Parallax } from 'react-parallax';

import Nav from 'app/Elements/Nav';
import Footer from 'app/Elements/Footer';

import css from './index.styl';

function toggleModal() {
  const modalWrapperElem = document.querySelector(`.${css.wrapper}`);
  const mainElem = document.querySelector('main');
  mainElem.classList.toggle(css.blur);
  modalWrapperElem.classList.toggle(css.hidden);
}

function onModalWrapperClick(event) {
  const modalWrapperElem = document.querySelector(`.${css.wrapper} .${css.hidden}`);
  if (modalWrapperElem) return;
  if (!event.target.closest(`.${css.modal}`)) toggleModal();
}

function onScroll() {
  if (window.innerWidth < 1085) return;

  const navElem = document.querySelector('nav');
  const { offsetTop } = navElem;
  const scroll = window.scrollY || window.pageYOffset;

  if (offsetTop < scroll) navElem.classList.add(css.fixed);
  else navElem.classList.remove(css.fixed);
}

function Landing() {
  useEffect(() => {
    const typedText = new Typed(`.${css.selfWritingText}`, {
      strings: ['--- Это самопечатающийся текст'],
      typeSpeed: 100,
      loop: true,
      showCursor: false,
    });
  }, []);

  useEffect(() => {
    const modalWrapperElem = document.querySelector(`.${css.wrapper}`);
    modalWrapperElem.addEventListener('click', onModalWrapperClick);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  useEffect(() => () => {
    window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main>
      {/* Header */}
      <header>
        <div className={css.navWrapper}>
          <Nav className={css.nav} />
        </div>
        <div className={css.container}>
          <p className={css.selfWritingText} />
          <h1>Ремонт швейцарских часов в центре Москвы</h1>
          <img src="/logo-wh.png" alt="logo-whit" />
          <button type="button" className={css.default} onClick={toggleModal}>
            Узнать стоимость ремонта
          </button>
        </div>

        <video src="/video.mp4" muted autoPlay className={css.video} />
      </header>

      {/* Middle */}
      <section id="middle" className={css.middle}>
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
      <section id="contacts" className={css.contacts}>
        <div className={css.containerLeft}>
          <h2>
            Контакты и режим работы
          </h2>
          <div>
            <img src="/metro-icon.png" alt="metro-icon" />
            <p>
              Цветной бульвар
              <br />
              (3 минуты пешком)
            </p>
          </div>
          <p>
            Единственный выход из метро, налево
            300 метров по прямой и еще 100 метров
            налево
          </p>
          <p className={css.worksTime}>
            Будни 10:00-21:00
          </p>
          <p className={css.worksTime}>
            Выходные 11:00-20:00
          </p>
          <h3>Садовая-Самотёчная улица, 15/1</h3>
        </div>
        <div className={css.containerRight}>
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
          <a href="#maps" className={css.default}>
            Где проехать и припарковаться
          </a>
        </div>
      </section>

      <Parallax strength={300} contentClassName={css.parallax} bgImage="/header-bg.png" bgImageAlt="parallax" />

      {/* Map */}
      <section id="maps">
        <iframe
          title="google map"
          width="100%"
          height="650"
          frameBorder="0"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgzkzoWxKtUYReyrRubnygk8&key=AIzaSyAHKQ3GxH29--TSfkxmaQNdIbXB4iMQGR4"
          allowFullScreen
        />
      </section>

      {/* Footer */}
      <Footer />

      <div className={`${css.wrapper} ${css.hidden}`}>
        <div className={css.modal}>
          <button type="button" className={css.close} onClick={toggleModal}>✕</button>
          <a href="tel:+7 (495) 136-64-65">+7 (495) 136-64-65</a>
          <form action="mail.php" method="GET">
            <input type="text" name="tel" placeholder="+7 (XXX) XXX-XX-XX" />
            <input type="text" name="watch-model" placeholder="Модель часов (если известно)" />
            <button type="submit" name="button" className={css.default}>Отправить</button>
          </form>
        </div>
      </div>

    </main>
  );
}

export default Landing;
