import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../resources/styles/ProjectSelector.scss";

const ProjectSelector = (props) => {
  const projects = props.projects;

  const [active, setActive] = useState(0);

  const handleScroll = useCallback(
    (event) => {
      if (event.deltaY > 2) {
        if (active + 1 >= 0 && active + 1 < projects.length) {
          setActive(active + 1);
        }
      } else if (event.deltaY < -2) {
        if (active - 1 >= 0 && active - 1 < projects.length) {
          setActive(active - 1);
        }
      }
    },
    [active, projects.length]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [handleScroll]);

  return (
    <section id="project-selector">
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
