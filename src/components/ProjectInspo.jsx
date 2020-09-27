import React from "react";
import "./../resources/styles/ProjectInspo.scss";
import Image from "./../components/atomic/Image";
import Fade from "react-reveal/Fade";

const ProjectInspo = (props) => {
  const projectInspo = props.projectInspo[0];
  return (
    <section className="project-inspo">
      <Fade bottom>
        <h2>_{projectInspo.title}</h2>
      </Fade>

      {projectInspo.images.map((image, index) => (
        <Fade bottom>
          <Image
            src={image.url}
            alt={image.description}
            classes={"insp" + (index + 1)}
          ></Image>
        </Fade>
      ))}
    </section>
  );
};
export default ProjectInspo;
