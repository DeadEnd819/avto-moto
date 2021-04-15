import React from 'react';
import {ReactSVG} from 'react-svg';
import CloseIcon from '../../assets/img/icon-close.svg';
import StarIcon from '../../assets/img/icon-star.svg';

const Popup = () => {
  return (
    <div className="review-popup">
      <div className="review-popup__wrapper">
        <h2 className="review-popup__title">Оставить отзыв</h2>
        <button className="review-popup__button-close">
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
                <legend className="form__legend">Оцените товар:</legend>
                <input className="form__input visually-hidden" type="radio" id="star-1" name="rating" value="1"/>
                <label className="form__label" htmlFor="star-1">
                  <ReactSVG className="form__rating-icon" src={StarIcon} wrapper="span"/>
                </label>
                <input className="form__input visually-hidden" type="radio" id="star-2" name="rating" value="2"/>
                <label className="form__label" htmlFor="star-2">
                  <ReactSVG className="form__rating-icon" src={StarIcon} wrapper="span"/>
                </label>
                <input className="form__input visually-hidden" type="radio" id="star-3" name="rating" value="3"/>
                <label className="form__label" htmlFor="star-3">
                  <ReactSVG className="form__rating-icon" src={StarIcon} wrapper="span"/>
                </label>
                <input className="form__input visually-hidden" type="radio" id="star-4" name="rating" value="4"/>
                <label className="form__label" htmlFor="star-4">
                  <ReactSVG className="form__rating-icon" src={StarIcon} wrapper="span"/>
                </label>
                <input className="form__input visually-hidden" type="radio" id="star-5" name="rating" value="5"/>
                <label className="form__label" htmlFor="star-5">
                  <ReactSVG className="form__rating-icon" src={StarIcon} wrapper="span" />
                </label>
              </fieldset>
              <label className="form__label visually-hidden" htmlFor="comment">Ввод комментария</label>
              <textarea
                className="form__textarea"
                name="comment"
                id="comment"
                cols="40"
                rows="7"
                placeholder="Комментарий"
                required
              />
            </div>
          </div>
          <button className="form__button-submit" type="submit">ставить отзыв</button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
