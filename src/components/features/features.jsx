import React from 'react';
import {FEATURES} from '../../const';

const Features = () => {
  return (
    <dl className="tabs__features features">
      {FEATURES.map((item, i) =>
        <div className="features__item-wrapper" key={i + item}>
          <dt className="features__name">{item.name}</dt>
          <dd className="features__value">{item.value}</dd>
        </div>
      )}
    </dl>
  );
}

export default Features;
