import React from "react";
import { Link } from "react-router-dom";
import WorkCardHome from "../../../../widgets/WorkCardHome/WorkCardHome";

import projects from "../../../../data/works";

import "./HomeWorks.scss";

import shine from "../../../../shared/assets/images/shine.png";
import arrow from "../../../../shared/assets/icons/arrow.svg";

const HomeWorks = () => {
  return (
    <section className="works">
      <div className="works__container container">
        <h2 className="works__title title">
          My Projects Highlight

          <div className="works__shine" >
            <img src={shine} alt="shine" />
          </div>
        </h2>

        <Link to="/works" className="works__button">
          Explore More{" "}
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </Link>

        <div className="works__projects">
          {projects.slice(0, 4).map((project, index) => (
            <WorkCardHome
              key={index}
              name={project.name}
              type={project.type}
              technologies={project.technologies}
              image={project.image}
              link={project.link}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeWorks;
