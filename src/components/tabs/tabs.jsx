import React from 'react';
import Features from "../features/features";
import Reviews from "../reviews/reviews";
import Contacts from "../contacts/contacts";

const Tabs = () => {
  return (
    <div className="description__tabs tabs">
      <ul className="tabs__list">
        <li className="tabs__item">
          <button className="tabs__button tabs__button--active">Характеристики</button>
        </li>
        <li className="tabs__item">
          <button className="tabs__button">Отзывы</button>
        </li>
        <li className="tabs__item">
          <button className="tabs__button">Контакты</button>
        </li>
      </ul>
      <Features />
      <Reviews />
      <Contacts />
    </div>
  );
}

export default Tabs;
