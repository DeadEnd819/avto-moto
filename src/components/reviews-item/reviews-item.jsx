import React from 'react';
import {ReactSVG} from 'react-svg';
import Star from '../../assets/img/icon-star.svg';
import {DEFINITION_TITLES, RATING_STARS} from '../../const';
import {getReviewDate} from '../../utils';

const ReviewsItem = ({review}) => {
  const {user, definition, rating, time} = review;

  return (
    <li className="reviews__item definition">
      <h2 className="definition__title">{user}</h2>
      <dl className="definition__list">
        {Object.keys(definition).map((key, i) =>
            <div className="definition__wrapper" key={i + key}>
              <dt className={`definition__name definition__name--${key}`}>{DEFINITION_TITLES[i]}</dt>
              <dd className="definition__value">{definition[key]}</dd>
            </div>
        )}
      </dl>
      <div className="reviews__rating rating">
        <ul className="rating__stars">
          {RATING_STARS.map((item, i) =>
            <li className="rating__star" key={i + item}>
              <ReactSVG
                className={`rating__icon ${rating >= i + 1 ? `rating__icon--red` : ``} `}
                src={Star}
              />
            </li>
          )}
        </ul>
        <p className="rating__text">{rating < 3 ? `Не советую` : `Советую`}</p>
      </div>
      <div>
        <time className="reviews__time" dateTime={time}>{getReviewDate(time)}</time>
        <button className="reviews__button-reply">Ответить</button>
      </div>
    </li>
  );
}

export default ReviewsItem;
