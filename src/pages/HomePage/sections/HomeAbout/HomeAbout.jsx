import React, { useEffect, useState } from "react";
import Button from "../../../../shared/ui/Button/Button";

import "./HomeAbout.scss";

import shine from "../../../../shared/assets/images/shine.png";
import photo from "../../../../shared/assets/images/about/photo_03.png";

const HomeAbout = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 768 && window.innerWidth > 520
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768 && window.innerWidth > 520);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ImageBlock = (
    <div className="about__img">
      <img src={photo} alt="me" />
    </div>
  );

  return (
    <section className="about">
      <div className="about__container container">
        <div className="about__content">
          <h2 className="about__title title">Let’s get know about me closer</h2>

          <div className="about__content-center">
            <p className="about__description text">
            Hi, I’m Nikita Yanakiiev — a frontend developer based in Germany, 
            focused on building responsive and interactive web experiences. 
            My portfolio includes a variety of projects, 
            from single-page applications to sleek, modern landing pages.
            </p>

            {isMobile && ImageBlock}
          </div>

          <Button to={"/about"} text={"Discover More About Me"} inline={true} />

          <div className="about__shine">
            <img src={shine} alt="shine" />
          </div>
        </div>

        {!isMobile && ImageBlock}
      </div>
    </section>
  );
};

export default HomeAbout;
