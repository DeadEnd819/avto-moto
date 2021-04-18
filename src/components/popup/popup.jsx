import React, {Fragment, useEffect, useCallback} from 'react';
import {ReactSVG} from 'react-svg';
import CloseIcon from '../../assets/img/icon-close.svg';
import StarIcon from '../../assets/img/icon-star.svg';
import {RATING_STARS, POPUP_INPUTS} from '../../const';

const useEscapeButton = (callback) => {
  const handleEscapeDown = useCallback((evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      callback();
    }
  }, [callback]);

  useEffect(() => {
    document.addEventListener(`keydown`, handleEscapeDown);

    return () => document.removeEventListener(`keydown`, handleEscapeDown);
  }, [handleEscapeDown]);
};

const Popup = ({onPopupButtonClick}) => {
  const handleBlockClick = (evt) => {
    if (evt.currentTarget === evt.target) {
      onPopupButtonClick();
    }
  };

  useEscapeButton(onPopupButtonClick);

  return (
    <div className="review-popup" onClick={handleBlockClick}>
      <div className="review-popup__wrapper">
        <h2 className="review-popup__title">Оставить отзыв</h2>
        <button className="review-popup__button-close" onClick={onPopupButtonClick}>
          <ReactSVG className="review-popup__button-icon" src={CloseIcon}/>
        </button>
        <form className="review-popup__form form" action="#">
          <div className="form__wrapper">
            <div className="form__input-wrapper">
              {POPUP_INPUTS.map((item, i) =>
                <Fragment key={i + item}>
                  <label className="form__label visually-hidden" htmlFor={item.id}>{item.title}</label>
                  <input className="form__input" type="text" id={item.id} placeholder={item.title} required={item.required} />
                </Fragment>
              )}
            </div>
            <div className="form__input-wrapper">
              <fieldset className="form__fieldset">
                <div className="form__rating-wrapper">
                  <legend className="form__legend">Оцените товар:</legend>
                  <div className="form__stars-wrapper">
                    {RATING_STARS.reverse().map((item, i) =>
                      <Fragment key={i + item}>
                        <input className="form__input visually-hidden" type="radio" id={`star-${item}`} name="rating" value={item}/>
                        <label className="form__label form__label--star" htmlFor={`star-${item}`}>
                          <ReactSVG className="form__rating-icon" src={StarIcon} wrapper="span"/>
                        </label>
                      </Fragment>
                    )}
                  </div>
                </div>
              </fieldset>
              <label className="form__label visually-hidden" htmlFor="comment">Ввод комментария</label>
              <textarea
                className="form__textarea"
                name="comment"
                id="comment"
                placeholder="Комментарий"
                required
              />
            </div>
          </div>
          <button className="form__button-submit button button--red" type="submit">оставить отзыв</button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
