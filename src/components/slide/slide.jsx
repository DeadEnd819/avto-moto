import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({img}) => {
  return (
    <div className="slider__slide slide">
      <picture className="slide__image">
        <source type="image/webp" srcSet={img.bigWebp} />
        <img src={img.big} alt="Фото автомобиля" />
      </picture>
      <p className="slide__text">NEW MODEL</p>
    </div>
  );
}

Slide.propTypes = {
  img: PropTypes.shape({
    big: PropTypes.string.isRequired,
    bigWebp: PropTypes.string.isRequired,
    small: PropTypes.string.isRequired,
    smallWebp: PropTypes.string.isRequired,
  }).isRequired,
};

export default Slide;
