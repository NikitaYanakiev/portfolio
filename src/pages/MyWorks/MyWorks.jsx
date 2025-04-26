import { useState } from "react";
import "./MyWorks.scss";
import projects from "../../data/works";
import HeadTitle from "../../widgets/HeadTitle/HeadTitle";
import WorkCard from "../../widgets/WorkCard/WorkCard";

const MyWorks = () => {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  return (
    <main className="my-works">
      <div className="container">
        <HeadTitle title="My works" subtitle="Showcase About Works" />

        <div className="my-works__grid">
          {visibleProjects.map((project) => (
            <WorkCard
              key={project.id}
              name={project.name}
              type={project.type}
              link={project.link}
              github={project.github}
              image={project.image}
            />
          ))}
        </div>

        {hasMore && (
          <div className="load-more-wrapper">
            <button className="load-more" onClick={handleLoadMore}>
              Load more works
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyWorks;
