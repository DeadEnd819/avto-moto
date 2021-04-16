import React from 'react';
import Slider from '../slider/slider';
import Details from '../details/details';
import Tabs from '../tabs/tabs';
import Popup from '../popup/poup';

const Main = () => {
  return (
    <main className="main">
      <div className="main_wrapper container">
        <h1 className="main__title visually-hidden">Описание автомобиля Марпех 11</h1>
        <section className="main__description description">
          <div className="description__wrapper">
            <Slider />
            <Details />
          </div>
          <Tabs />
        </section>
        {/*<Popup />*/}
      </div>
    </main>
  );
}

export default Main;
