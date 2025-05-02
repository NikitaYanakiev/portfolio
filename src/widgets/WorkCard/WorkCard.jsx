import "./WorkCard.scss";
import { FiArrowUpRight } from "react-icons/fi";
import { TbBrandGithubFilled } from "react-icons/tb";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WorkCard = ({ name, type, image, link, github }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsTouchDevice(('ontouchstart' in window) || navigator.maxTouchPoints > 0);
  }, []);

  const handleClick = () => {
    if (isTouchDevice) {
      setIsActive(prev => !prev);
    }
  };

  return (
    <div className="work-card">
      <div
        className={`work-card__image ${isActive ? "active" : ""}`}
        onClick={handleClick}
      >
        <img src={image} alt={name} />
        <div className="work-card__hover">
          <Link to={link} target="_blank" rel="noreferrer" className="work-card__link-follow">
            <FiArrowUpRight className="follow" />
          </Link>
          <Link to={github} target="_blank" rel="noreferrer" className="work-card__link-info">
            <TbBrandGithubFilled className="info" />
          </Link>
        </div>
      </div>

      <div className="work-card__info">
        <span className="work-card__subtitle">{type}</span>
        <h3 className="work-card__title">{name}</h3>
      </div>
    </div>
  );
};

export default WorkCard;
