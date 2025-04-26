import React from "react";
import './HeadTitle.scss';

import shine from "../../shared/assets/images/shine.png";

const HeadTitle = ({title, subtitle}) => {
  return (
    <>
      <div className="head-title">
        <div className="head-title__shine">
          <img src={shine} alt="shine" />
        </div>
        <h2 className="head-title__title main-title">{title}</h2>

        <h3 className="head-title__subtitle text">{subtitle}</h3>
      </div>

      <span className="head-title__line"></span>
    </>
  );
};

export default HeadTitle;
