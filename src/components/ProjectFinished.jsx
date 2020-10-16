import React from "react";
import "./../resources/styles/ProjectFinished.scss";
import Image from "./../components/atomic/Image";

const ProjectFinished = (props) => {
  const projectFinished = props.projectFinished;
  return (
    <section className="project-finished">
      {projectFinished.images.map((image, index) => (
        <Image key={index} src={image.url} alt={image.description}></Image>
      ))}
    </section>
  );
};

export default ProjectFinished;
