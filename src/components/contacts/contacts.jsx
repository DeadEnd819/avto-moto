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
        <img className="contacts__map-image" src={Map} width="431" height="271" alt="Карта"/>
        <iframe
          className="contacts__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.8301744005812!2d30.314303316390657!3d59.9681404818869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTcwMjI!5e0!3m2!1sru!2sru!4v1618585802453!5m2!1sru!2sru"
          width="431"
          height="271"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default Contacts;
