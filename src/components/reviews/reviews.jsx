import React from 'react';
import {ReactSVG} from "react-svg";
import Star from "../../assets/img/icon-star.svg";

const Reviews = () => {
  return (
    <div className="tabs__reviews reviews">
      <button className="reviews__button button button--white">оставить отзыв</button>
      <ul className="reviews__list">
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
        <li className="reviews__item definition">
          <h2 className="definition__title">Марсель Исмагилов</h2>
          <dl className="definition__list">
            <div className="definition__wrapper">
              <dt className="definition__name definition__name--dignity">Достоинства</dt>
              <dd className="definition__value">Cтиль, комфорт, управляемость</dd>
            </div>
            <div className="definition__wrapper">
              <dt className="definition__name definition__name--limitations">Недостатки</dt>
              <dd className="definition__value">Дорогой ремонт и обслуживание</dd>
            </div>
            <div className="definition__wrapper">
              <dt className="definition__name definition__name--comment">Комментарий</dt>
              <dd className="definition__value">
                Дизайн отличный, управление просто шикарно,
                ощущения за рулём такой машины особые.
                Но ремонт очень дорогой. Пару месяцев назад
                пришлось менять двигатель. По стоимости вышло
                как новый автомобиль. Так что, если покупать
                эту машину, надо быть готовым к большим расходам на обслуживание.
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
      </ul>
    </div>
  );
}

export default Reviews;
