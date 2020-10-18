import React from "react";
import "./../resources/styles/ProjectIdeation.scss";
import Image from "./../components/atomic/Image";

const ProjectIdeation = (props) => {
  const projectIdeation = props.projectIdeation;
  return (
    <section className="project-ideation disable-scrollbar">
      <h2>_Ideation</h2>
      <div className="ideation-images">
        {projectIdeation.sketching.images &&
          projectIdeation.sketching.images.map((image, index) => (
            <Image key={index} src={image.url} alt={image.description}></Image>
          ))}
        {projectIdeation.prototyping.images &&
          projectIdeation.prototyping.images.map((image, index) => (
            <Image key={index} src={image.url} alt={image.description}></Image>
          ))}
      </div>
    </section>
  );
};

export default ProjectIdeation;
