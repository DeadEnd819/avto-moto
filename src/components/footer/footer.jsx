import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_wrapper container">
        <nav className="footer__nav nav">
          <ul className="nav__list nav__list--footer">
            <li className="nav__item">
              <a className="nav__link" href="#"  aria-label="Перейти на станицу Корпоративным клиентам">
                Корпоративным клиентам
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#" aria-label="Перейти на станицу Клиентам">
                Клиентам
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#" aria-label="Перейти на станицу Аренда авто">
                Аренда авто
              </a></li>
            <li className="nav__item">
              <a className="nav__link" href="#" aria-label="Перейти на станицу Каршеринг">
                Каршеринг
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#" aria-label="Перейти на станицу Как продать авто">
                Как продать авто
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#" aria-label="Перейти на станицу Traid-in">
                Traid-in
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#" aria-label="Перейти на станицу Test draiv">
                Test draiv
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
