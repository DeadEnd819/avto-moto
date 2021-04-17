import React from 'react';
import {ReactSVG} from 'react-svg';
import ArrowRight from '../../assets/img/icon-arrow-right.svg';
import ArrowLeft from '../../assets/img/icon-arrow-left.svg';

const SliderButton = ({onButtonClick, disabled, type}) => {
  return (
    <button
      className={`slider__button slider__button--${type}`}
      onClick={onButtonClick}
      disabled={disabled}
    >
      <ReactSVG
        className={`slider__button-icon slider__button-icon--${type === `prev` ? `left` : `right`}`}
        src={type === `prev` ? ArrowLeft : ArrowRight}
      />
    </button>
  );
}

export default SliderButton;
