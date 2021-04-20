import React from 'react';
import {splittingDigits} from '../../utils';
import {AVTO_INFO_MOCKS} from '../../mocks';

const Details = () => {
  const {id, name, price, details} = AVTO_INFO_MOCKS;

  return (
    <div className="description__details details" id={id}>
      <div className="details__wrapper">
        <h2 className="details__title">{name}</h2>
        <ul className="details__list">
          {Object.entries(details).map(([key, value]) =>
            <li className={`details__item details__item--${key}`} key={key + value}>
              {value}
            </li>
          )}
        </ul>
        <div className="details__price">
          <p className="details__new-price">{splittingDigits(price.current)} &#8381;</p>
          <p className="details__old-price">{splittingDigits(price.old)} &#8381;</p>
        </div>
        <div className="details__button-wrapper">
          <a className="details__button button button--red" href="#">
            оставить заявку
          </a>
          <a className="details__button button button--white" href="#">
            в кредит от 11 000 &#8381;
          </a>
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {};

export default Details;
