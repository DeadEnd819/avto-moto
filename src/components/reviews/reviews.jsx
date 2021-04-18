import React from 'react';
import ReviewsItem from '../reviews-item/reviews-item';
import {REVIEWS_MOCKS} from '../../const';

const Reviews = ({onPopupButtonClick}) => {
  return (
    <div className="tabs__reviews reviews">
      <button
        className="reviews__button button button--white"
        onClick={onPopupButtonClick}
      >
        оставить отзыв
      </button>
      <ul className="reviews__list">
        {REVIEWS_MOCKS.map((item, i) =>
          <ReviewsItem review={item} key={i + item} />
        )}
      </ul>
    </div>
  );
}

export default Reviews;
