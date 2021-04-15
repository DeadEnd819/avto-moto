import React from 'react';
import {ReactSVG} from 'react-svg';
import ArrowRight from '../../assets/img/icon-arrow-right.svg';
import ArrowLeft from '../../assets/img/icon-arrow-left.svg';
import Imag1 from '../../assets/img/avto-1.jpg';
import ImagSmall1 from '../../assets/img/avto-1-small.jpg';
import ImagSmall2 from '../../assets/img/avto-2-small.jpg';
import ImagSmall3 from '../../assets/img/avto-3-small.jpg';

const Slider = () => {
  return (
    <div className="description__slider slider">
      <div className="slider__slide slide">
        <img className="slide__image" src={Imag1} alt="Avto preview"/>
        <p className="slide__text">NEW MODEL</p>
      </div>
      <div className="slider__control">
        <button className="slider__button slider__button--prev">
          <ReactSVG
            className="slider__button-icon slider__button-icon--left"
            src={ArrowLeft}
          />
        </button>
        <ul className="slider__preview-list">
          <li className="slider__preview-item">
            <img src={ImagSmall1} alt="Слайд один"/>
          </li>
          <li className="slider__preview-item">
            <img src={ImagSmall2} alt="Слайд два"/>
          </li>
          <li className="slider__preview-item">
            <img src={ImagSmall3} alt="Слайд три"/>
          </li>
        </ul>
        <button className="slider__button  slider__button--next slider__button--active">
          <ReactSVG
            className="slider__button-icon slider__button-icon--right"
            src={ArrowRight}
          />
        </button>
      </div>
    </div>
  );
}

export default Slider;
