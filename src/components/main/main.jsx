import React from 'react';
import {connect} from 'react-redux';
import Slider from '../slider/slider';
import Details from '../details/details';
import Tabs from '../tabs/tabs';
import Popup from '../popup/popup';
import {getPopupFlag} from "../../store/selectors";

const Main = ({getPopupFlag}) => {
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
        {getPopupFlag && <Popup />}
      </div>
    </main>
  );
}

const mapStateToProps = (store) => ({
  getPopupFlag: getPopupFlag(store),
});

export default connect(mapStateToProps)(Main);
