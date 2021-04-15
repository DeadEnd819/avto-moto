import React from 'react';
import {ReactSVG} from 'react-svg';
import Logo from '../../assets/img/icon-logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <a className="header__logo" href="/" aria-label="Перейти на главную станицу">
          <ReactSVG className="header__logo-icon" src={Logo} alt="Avto-Moto - Лого"/>
        </a>
        <nav className="header__nav nav">
          <ul className="nav__list nav__list--header">
            <li className="nav__item">
              <a className="nav__link" href="#"  aria-label="Перейти на станицу выбора автомобиля">
                Автомобили
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#"  aria-label="Перейти на станицу контактов">
                Контакты
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#"  aria-label="Перейти на станицу услуг">
                Услуги
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#"  aria-label="Перейти на станицу вакансий">
                Вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
