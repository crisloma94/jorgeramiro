import React from "react";
import "./../resources/styles/ProjectPresentation.scss";

const ProjectPresentation = (props) => {
  return (
    <section className="project-presentation">
      <img
        src={props.project.data.mainImage}
        alt={props.project.data.name}
      ></img>
      <h1>{props.project.data.name}</h1>
    </section>
  );
};

export default ProjectPresentation;
