import React from 'react';

const Details = () => {
  return (
    <div className="description__details details">
      <div className="details__wrapper">
        <h2 className="details__title">Марпех 11</h2>
        <ul className="details__list">
          <li className="details__item details__item--fuel">
            бензин
          </li>
          <li className="details__item details__item--transmission">
            механика
          </li>
          <li className="details__item details__item--horsepower">
            100 л.с.
          </li>
          <li className="details__item details__item--volume">
            1.4 л
          </li>
        </ul>
        <p className="details__price">
          2 300 000 ₽
          <span className="details__old-price">
          2 400 000 ₽
        </span>
        </p>
        <div className="details__button-wrapper">
          <a className="details__button button button--red" href="#">
            оставить заявку
          </a>
          <a className="details__button button button--white" href="#">
            в кредит от 11 000 ₽
          </a>
        </div>
      </div>
    </div>
  );
}

export default Details;
