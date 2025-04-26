import React from "react";
import { useState, useEffect } from "react";

import { FiArrowUpRight } from "react-icons/fi";
import { FaInfo } from "react-icons/fa";

import "./WorkCardHome.scss";

const WorkCardHome = ({ name, type, technologies, image, link, github }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleClick = () => {
    if (isTouchDevice) {
      setIsActive((prev) => !prev);
    }
  };
  return (
    <div className="works__item">
      <div
        className={`works__item-img ${isActive ? "active" : ""}`}
        onClick={handleClick}
      >
        <img src={image} alt="project" />
        <div className="works__item-hover">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="works__item-follow"
          >
            <FiArrowUpRight className="follow" />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="works__item-info"
          >
            <FaInfo className="info" />
          </a>
        </div>
      </div>
      <div className="works__item-title">
        {name} <span></span>
      </div>
      <div className="works__item-description">
        <div className="works__item-subtitle">
          Project type: <span>{type}</span>
        </div>
        <div className="works__item-subtitle">
          technologies: <span>{technologies}</span>
        </div>
      </div>
    </div>
  );
};

export default WorkCardHome;
