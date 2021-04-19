import React, {Fragment, useCallback, useState} from 'react';
import {ReactSVG} from 'react-svg';
import {connect} from 'react-redux';
import CloseIcon from '../../assets/img/icon-close.svg';
import StarIcon from '../../assets/img/icon-star.svg';
import {setPopupClose, setReview} from '../../store/action';
import {useEscapeButton} from '../../hooks/use-escape-button';
import {RATING_STARS, POPUP_INPUTS} from '../../const';
import {extend} from '../../utils';

const Popup = ({closePopup, setReview}) => {
  const [errorForm, setErrorForm] = useState(false);
  const [requiredInput, setRequiredInput] = useState({
    user: false,
    comment: false
  });

  const [reviewState, setReviewState] = useState({
    user: ``,
    dignity: ``,
    limitations: ``,
    comment: ``,
    rating: `0`,
  });

  const {user, dignity, limitations, comment, rating} = reviewState;

  const handleFieldChange = useCallback(({name, value}) => {
    setReviewState(extend(reviewState, {[name]: value}));

    if (name in requiredInput) {
      setRequiredInput(extend(requiredInput, {[name]: Boolean(value)}))
    }
  }, [reviewState, requiredInput, setReviewState, setRequiredInput]);

  const handleFormSubmit = useCallback(
    (evt) => {
      evt.preventDefault();

      const review = {
        user,
        definition: {
          dignity,
          limitations,
          comment,
        },
        rating,
        time: new Date(),
      };

      if (!requiredInput.user || !requiredInput.comment) {
        setErrorForm(true);
        return;
      }

      setErrorForm(false);
      setReview(review);
      closePopup();
    }, [user, dignity, limitations, comment, rating, requiredInput.user, requiredInput.comment, setReview, closePopup]
  );

  const handleBlockClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopup();
    }
  };

  useEscapeButton(closePopup);

  return (
    <div className="review-popup" onClick={handleBlockClick}>
      <div className="review-popup__wrapper">
        <h2 className="review-popup__title">Оставить отзыв</h2>
        <button className="review-popup__button-close" onClick={closePopup}>
          <ReactSVG className="review-popup__button-icon" src={CloseIcon}/>
        </button>
        <form
          className={`review-popup__form form ${errorForm ? `form--error` : ``}`}
          action="#"
          onSubmit={handleFormSubmit}
        >
          <div className="form__wrapper">
            <ul className="form__list">
              {POPUP_INPUTS.map((item, i) => {
                const isRequired = item.id in requiredInput && !requiredInput[item.id];

                  return (
                    <li
                      className={`form__item ${isRequired ? `form__item--required` : ``}`}
                      key={i + item}
                    >
                      <label className="form__label visually-hidden" htmlFor={item.id}>{item.title}</label>
                      <input
                        className={`form__input ${isRequired ? `form__input--required` : ``}`}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={reviewState[item.id]}
                        placeholder={item.title}
                        onChange={(evt) => handleFieldChange(evt.target)}
                      />
                    </li>
                  );
              })}
            </ul>
            <ul className="form__list">
              <li className="form__item">
                <fieldset className="form__fieldset">
                  <div className="form__rating-wrapper">
                    <legend className="form__legend">Оцените товар:</legend>
                    <div className="form__stars-wrapper">
                      {RATING_STARS.map((item, i) =>
                        <Fragment key={i + item}>
                          <input
                            className="form__input visually-hidden"
                            type="radio"
                            id={`star-${item}`}
                            name="rating"
                            value={item}
                            checked={rating === item}
                            onChange={(evt) => handleFieldChange(evt.target)}
                          />
                          <label className="form__label form__label--star" htmlFor={`star-${item}`}>
                            <ReactSVG className="form__rating-icon" src={StarIcon} wrapper="span"/>
                          </label>
                        </Fragment>
                      )}
                    </div>
                  </div>
                </fieldset>
              </li>
              <li className={`form__item ${!requiredInput.comment ? `form__item--required` : ``}`}>
                <label className="form__label visually-hidden" htmlFor="comment">Ввод комментария</label>
                <textarea
                  className={`form__textarea ${!requiredInput.comment ? `form__textarea--required` : ``}`}
                  name="comment"
                  id="comment"
                  value={comment}
                  placeholder="Комментарий"
                  onChange={(evt) => handleFieldChange(evt.target)}
                />
              </li>
            </ul>
          </div>
          <button className="form__button-submit button button--red" type="submit">оставить отзыв</button>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setReview(date) {
    dispatch(setReview(date));
  },
  closePopup() {
    dispatch(setPopupClose());
  },
});

export default connect(null, mapDispatchToProps)(Popup);
