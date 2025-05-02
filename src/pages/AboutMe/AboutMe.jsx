import HeadTitle from "../../widgets/HeadTitle/HeadTitle";
import "./AboutMe.scss";

import photo_01 from "../../shared/assets/images/about/photo_01.jpg";
import photo_02 from "../../shared/assets/images/about/photo_02.jpg";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__container container">
        <HeadTitle title="About You" subtitle="Little Brief About Myself" />

        <div className="about-me__text ">
          <h2 className="about-me__slogan ">
          My mission is to make the web better.
          </h2>

          <p className="about-me__description">
            I’m a frontend developer passionate about building clean,
            responsive, and engaging interfaces. From landing pages to
            single-page applications, I turn design concepts into real,
            functional web experiences using modern technologies like HTML, CSS,
            JavaScript, and React. My goal is to create interfaces that not only
            look good, but feel smooth and intuitive for users.
          </p>
        </div>

        <div className="about-me__photos">
          <div className="about-me__img01">
            <img src={photo_01} alt="me" />
          </div>
          <div className="about-me__img02">
            <img src={photo_02} alt="me" />
          </div>
        </div>

        <h4 className="about-me__socials-title">Follow me on:</h4>
        <div className="about-me__socials">
          <Link to="https://www.linkedin.com/in/nikita-yanakiiev-a0273b260/" target="_blank" rel="noreferrer" className="about-me__link">
            LinkedIn
          </Link>
          <Link to="https://www.facebook.com/nikita.yanakiev.5" target="_blank" rel="noreferrer" className="about-me__link">
            Facebook
          </Link>
          <Link to="https://t.me/Nikita_Yanakiev" target="_blank" rel="noreferrer" className="about-me__link">
            Telegram
          </Link>
          <Link to="https://www.instagram.com/nik.yankv/" target="_blank" rel="noreferrer" className="about-me__link">
            Instagram
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
