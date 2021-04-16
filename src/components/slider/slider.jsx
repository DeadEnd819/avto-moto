import React, {useState} from 'react';
import {ReactSVG} from 'react-svg';
import ArrowRight from '../../assets/img/icon-arrow-right.svg';
import ArrowLeft from '../../assets/img/icon-arrow-left.svg';
import {IMAGES} from '../../const';

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevButtonClick = () => {
    setActiveSlide((prevState) => prevState - 1);
  };

  const handleNextButtonClick = () => {
    setActiveSlide((prevState) => prevState + 1)
  };

  return (
    <div className="description__slider slider">
      <div className="slider__slide slide">
        <img className="slide__image" src={IMAGES[activeSlide].big} alt="Avto preview"/>
        <p className="slide__text">NEW MODEL</p>
      </div>
      <div className="slider__control">
        <button
          className="slider__button slider__button--prev"
          onClick={handlePrevButtonClick}
          disabled={activeSlide === 0}
        >
          <ReactSVG
            className="slider__button-icon slider__button-icon--left"
            src={ArrowLeft}
          />
        </button>
        <ul className="slider__preview-list">
          {IMAGES.map((item, i) => {
            return (
              <li key={`${i}-${item}`} className="slider__preview-item">
                <img src={item.small} alt="Слайд один"/>
              </li>
            );
          })}
        </ul>
        <button
          className="slider__button  slider__button--next"
          onClick={handleNextButtonClick}
          disabled={activeSlide === IMAGES.length - 1}
        >
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
