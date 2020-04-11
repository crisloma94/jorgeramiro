import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./../resources/styles/ProjectSelector.scss";

const ProjectSelector = props => {
  const projects = props.projects;
  const projectSelector = useRef();

  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(
    document.body.getBoundingClientRect().y
  );

  const handleScroll = useCallback(() => {
    const newPosition = document.body.getBoundingClientRect().y;
    const elementRect = projectSelector.current.getBoundingClientRect();

    if (elementRect.y < 0 && elementRect.y > -(elementRect.height / 2)) {
      if (position - newPosition > 30) {
        if (active + 1 >= 0 && active + 1 < projects.length) {
          setActive(active + 1);
        }
        setPosition(newPosition);
      } else if (position - newPosition < -30) {
        if (active - 1 >= 0 && active - 1 < projects.length) {
          setActive(active - 1);
        }
        setPosition(newPosition);
      }
    }
  }, [active, position, projects.length]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section id="project-selector" ref={projectSelector}>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li
            key={project.id}
            className={`project-link ${active === index ? "active" : ""} ${
              active === index + 2 || active === index - 2 ? "last" : ""
            }`}
          >
            <Link to={`/projects/${project.id}`}>
              {`${(index + 1).toString().padStart(2, "0")}_${
                project.data.name
              }`}
            </Link>
            <img
              src={`${process.env.PUBLIC_URL}${project.data.mainImage}`}
              alt={project.data.name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSelector;
