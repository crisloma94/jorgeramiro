import React from "react";
import "./../resources/styles/ProjectPresentation.scss";
import Image from "./../components/atomic/Image";

const ProjectPresentation = (props) => {
  return (
    <section className="project-presentation">
      <Image
        src={props.project.data.mainImage}
        alt={props.project.data.name}
      ></Image>
      <h1>{props.project.data.name}</h1>
    </section>
  );
};

export default ProjectPresentation;
