import React from 'react';
import {connect} from 'react-redux';
import ReviewsItem from '../reviews-item/reviews-item';
import {getReviews} from '../../store/selectors';
import {setPopupOpen} from "../../store/action";

const Reviews = ({openPopup, reviews}) => {
  return (
    <div className="tabs__reviews reviews">
      <button
        className="reviews__button button button--white"
        onClick={openPopup}
      >
        оставить отзыв
      </button>
      <ul className="reviews__list">
        {reviews.map((item, i) =>
          <ReviewsItem review={item} key={i + item} />
        )}
      </ul>
    </div>
  );
}

const mapStateToProps = (store) => ({
  reviews: getReviews(store),
});

const mapDispatchToProps = (dispatch) => ({
  openPopup() {
    dispatch(setPopupOpen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
