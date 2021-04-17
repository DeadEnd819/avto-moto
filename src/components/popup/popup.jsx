import React from 'react';
import {ReactSVG} from 'react-svg';
import CloseIcon from '../../assets/img/icon-close.svg';
import StarIcon from '../../assets/img/icon-star.svg';

const Popup = ({onPopupButtonClick}) => {
  return (
    <div className="review-popup">
      <div className="review-popup__wrapper">
        <h2 className="review-popup__title">Оставить отзыв</h2>
        <button className="review-popup__button-close" onClick={onPopupButtonClick}>
          <ReactSVG className="review-popup__button-icon" src={CloseIcon}/>
        </button>
        <form className="review-popup__form form">
          <div className="form__wrapper">
            <div className="form__input-wrapper">
              <label className="form__label visually-hidden" htmlFor="name">Имя</label>
              <input className="form__input" type="text" id="name" placeholder="Имя" required />
              <label className="form__label visually-hidden" htmlFor="dignity">Достоинства</label>
              <input className="form__input" type="text" id="dignity" placeholder="Достоинства" />
              <label className="form__label visually-hidden" htmlFor="limitations">Недостатки</label>
              <input className="form__input" type="text" id="limitations" placeholder="Недостатки" />
            </div>
            <div className="form__input-wrapper">
              <fieldset className="form__fieldset">
                <div className="form__rating-wrapper">
                  <legend className="form__legend">Оцените товар:</legend>
                  <div className="form__stars-wrapper">
                    <input className="form__input visually-hidden" type="radio" id="star-1" name="rating" value="1"/>
                    <label className="form__label form__label--star" htmlFor="star-1">
                      <ReactSVG className="form__rating-icon" src={StarIcon} wrapper="span"/>
                    </label>
                    <input className="form__input visually-hidden" type="radio" id="star-2" name="rating" value="2"/>
                    <label className="form__label form__label--star" htmlFor="star-2">
                      <ReactSVG className="form__rating-icon" src={StarIcon} wrapper="span"/>
                    </label>
                    <input className="form__input visually-hidden" type="radio" id="star-3" name="rating" value="3"/>
                    <label className="form__label form__label--star" htmlFor="star-3">
                      <ReactSVG className="form__rating-icon" src={StarIcon} wrapper="span"/>
                    </label>
                    <input className="form__input visually-hidden" type="radio" id="star-4" name="rating" value="4"/>
                    <label className="form__label form__label--star" htmlFor="star-4">
                      <ReactSVG className="form__rating-icon" src={StarIcon} wrapper="span"/>
                    </label>
                    <input className="form__input visually-hidden" type="radio" id="star-5" name="rating" value="5"/>
                    <label className="form__label form__label--star" htmlFor="star-5">
                      <ReactSVG className="form__rating-icon" src={StarIcon} wrapper="span" />
                    </label>
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
