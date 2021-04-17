import React from 'react';

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

export default Slide;
