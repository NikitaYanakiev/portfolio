import React from "react";
import logo_white from "../../shared/assets/images/logo_white.png";


import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Get in Touch With Me</h2>
        <h3 className="footer__subtitle">
          <a href="mailto:yanakiiev@gmail.com" >yanakiiev@gmail.com</a>
        </h3>

        <div className="footer__body">
          <div className="footer__logo">
            <img src={logo_white} alt="logo" />
          </div>

          <div className="footer__address">
            Platz der Freiheit 2, Marl 45770.
            <br />
            Germany
          </div>

          <div className="footer__contact">
            <a href="tel:+4915201357760" className="footer__phone-number">+49 (1520)-135-7760</a>
            <div className="footer__socials">
              <Link to="https://t.me/Nikita_Yanakiev" className="footer__socials-item" target="_blank" rel="noreferrer">
                <FaTelegramPlane className="footer__socials-icon" />
              </Link>

              <Link to="https://www.linkedin.com/in/nikita-yanakiiev-a0273b260/" className="footer__socials-item" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="footer__socials-icon" />
              </Link>

              <Link to="https://www.instagram.com/nik.yankv/" className="footer__socials-item" target="_blank" rel="noreferrer">
                <FaInstagram className="footer__socials-icon" />
              </Link>
            </div>
          </div>
        </div>
        <span className="footer__line"></span>

        <div className="footer__licenses">© 2025. All rights reserved. </div>
      </div>
    </footer>
  );
};

export default Footer;
