import React from "react";

const TabsItem = ({tab, activeTab, onTabClick}) => {
  return (
    <li className="tabs__item">
      <button
        className={`tabs__button${activeTab === tab ? ` tabs__button--active` : ``}`}
        onClick={onTabClick}
      >
        {tab}
      </button>
    </li>
  );
};

export default TabsItem;
