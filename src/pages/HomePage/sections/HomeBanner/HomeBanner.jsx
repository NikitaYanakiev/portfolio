import React from "react";
import Button from "../../../../shared/ui/Button/Button";
import "./HomeBanner.scss";
import shine from "../../../../shared/assets/images/shine.png";

const HomeBanner = () => {
  return (
    <section className="banner">
      <div className="container banner__container">
        <h1 className="banner__title main-title">
          Modern & Responsive Web Development for Your Business
          <div className="banner__shine">
            <img src={shine} alt="shine" />
          </div>
        </h1>
        <Button to={"/works"} text={"Explore works"} showArrow="true" />
      </div>
    </section>
  );
};

export default HomeBanner;
