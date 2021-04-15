import React from 'react';
import Map from "../../assets/img/map.jpg";

const Contacts = () => {
  return (
    <div className="tabs__contacts contacts">
      <dl className="contacts__info">
        <dt className="contacts__name">Адрес</dt>
        <dd className="contacts__value">Санкт-Петербург,<br/> набережная реки Карповки, дом 5</dd>
        <dt className="contacts__name">Режим работы</dt>
        <dd className="contacts__value">Ежедневно, с 10:00 до 21:00</dd>
        <dt className="contacts__name">Телефон</dt>
        <dd className="contacts__value">
          <a className="contacts__link" href="tel:88003335599">8 (800) 333-55-99</a>
        </dd>
        <dt className="contacts__name">E-mail</dt>
        <dd className="contacts__value">
          <a className="contacts__link" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </dd>
      </dl>
      <div className="contacts__map-wrapper">
        <img className="contacts__map-image" src={Map} alt="Карта"/>
      </div>
    </div>
  );
}

export default Contacts;
