import React from 'react';
import {FEATURES_LIST} from '../../const';
import {AVTO_INFO_MOCKS} from '../../mocks';

const Features = () => {
  const {features} = AVTO_INFO_MOCKS;

  return (
    <dl className="tabs__features features">
      {FEATURES_LIST.map((item, i) =>
        <div className="features__item-wrapper" key={i + item}>
          <dt className="features__name">{item.name}</dt>
          <dd className="features__value">{features[item.key]}</dd>
        </div>
      )}
    </dl>
  );
}

Features.propTypes = {};

export default Features;
