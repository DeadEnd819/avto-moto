import React, {useState} from 'react';
import Slider from '../slider/slider';
import Details from '../details/details';
import Tabs from '../tabs/tabs';
import Popup from '../popup/popup';

const Main = () => {
  const [activePopup, setActivePopup] = useState(false);

  const handlePopupOpenClick = () => {
    setActivePopup(true);
  }

  const handlePopupCloseClick = () => {
    setActivePopup(false);
  }

  return (
    <main className="main">
      <div className="main_wrapper container">
        <h1 className="main__title visually-hidden">Описание автомобиля Марпех 11</h1>
        <section className="main__description description">
          <div className="description__wrapper">
            <Slider />
            <Details />
          </div>
          <Tabs onPopupButtonClick={handlePopupOpenClick} />
        </section>
        {activePopup && <Popup onPopupButtonClick={handlePopupCloseClick}/>}
      </div>
    </main>
  );
}

export default Main;
