import React from 'react';
import {ReactSVG} from "react-svg";
import Star from "../../assets/img/icon-star.svg";

const ReviewsItem = ({review}) => {
  return (
    <li className="reviews__item definition">
      <h2 className="definition__title">Борис Иванов</h2>
      <dl className="definition__list">
        <div className="definition__wrapper">
          <dt className="definition__name definition__name--dignity">Достоинства</dt>
          <dd className="definition__value">мощность, внешний вид</dd>
        </div>
        <div className="definition__wrapper">
          <dt className="definition__name definition__name--limitations">Недостатки</dt>
          <dd className="definition__value">Слабые тормозные колодки (пришлось заменить)</dd>
        </div>
        <div className="definition__wrapper">
          <dt className="definition__name definition__name--comment">Комментарий</dt>
          <dd className="definition__value definition__value--comment">
            Взяли по трейд-ин, на выгодных условиях у дилера.
            Стильная внешка и крут по базовым характеристикам.
            Не думал, что пересяду на китайский автопром,
            но сейчас гоняю и понимаю, что полностью доволен.
          </dd>
        </div>
      </dl>
      <div className="reviews__rating rating">
        <ul className="rating__stars">
          <li className="rating__star">
            <ReactSVG className="rating__icon rating__icon--red" src={Star}/>
          </li>
          <li className="rating__star">
            <ReactSVG className="rating__icon rating__icon--red" src={Star}/>
          </li>
          <li className="rating__star">
            <ReactSVG className="rating__icon rating__icon--red" src={Star}/>
          </li>
          <li className="rating__star">
            <ReactSVG className="rating__icon" src={Star}/>
          </li>
          <li className="rating__star">
            <ReactSVG className="rating__icon" src={Star}/>
          </li>
        </ul>
        <p className="rating__text">Советую</p>
      </div>
      <div>
        <time className="reviews__time" dateTime="2021-03-14 23:00">месяц назад</time>
        <button className="reviews__button-reply">Ответить</button>
      </div>
    </li>
  );
}

export default ReviewsItem;
