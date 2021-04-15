import React from 'react';

const Features = () => {
  return (
    <dl className="tabs__features features">
      <div className="features__item-wrapper">
        <dt className="features__name">Трансмиссия</dt>
        <dd className="features__value">Роботизированная</dd>
      </div>
      <div className="features__item-wrapper">
        <dt className="features__name">Мощность двигателя, л.с.</dt>
        <dd className="features__value">249</dd>
      </div>
      <div className="features__item-wrapper">
        <dt className="features__name">Тип двигателя</dt>
        <dd className="features__value">Бензиновый</dd>
      </div>
      <div className="features__item-wrapper">
        <dt className="features__name">Привод</dt>
        <dd className="features__value">Полный</dd>
      </div>
      <div className="features__item-wrapper">
        <dt className="features__name">Объем двигателя, л</dt>
        <dd className="features__value">2.4</dd>
      </div>
      <div className="features__item-wrapper">
        <dt className="features__name">Макс. крутящий момент</dt>
        <dd className="features__value">370/4500</dd>
      </div>
      <div className="features__item-wrapper">
        <dt className="features__name">Количество цилиндров</dt>
        <dd className="features__value">4</dd>
      </div>
    </dl>
  );
}

export default Features;
