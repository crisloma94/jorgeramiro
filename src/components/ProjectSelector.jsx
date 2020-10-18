import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Link } from "react-router-dom";
import "./../resources/styles/ProjectSelector.scss";
import Image from "./../components/atomic/Image";

const ProjectSelector = (props) => {
  const projects = props.projects;

  return (
    <section id="project-selector">
      <ul className="project-list">
        <Controller>
          {projects.map((project, index) => (
            <Scene
              key={index}
              duration={150}
              classToggle="active"
              triggerElement={`.trigger-${index}`}
            >
              <li key={project.id} className={`project-link trigger-${index}`}>
                <Link to={`/projects/${project.id}`}>
                  {`${(index + 1).toString().padStart(2, "0")}_${
                    project.data.name
                  }`}
                </Link>
                <Image src={project.data.mainImage} alt={project.data.name} />
              </li>
            </Scene>
          ))}
        </Controller>
      </ul>
    </section>
  );
};

export default ProjectSelector;
