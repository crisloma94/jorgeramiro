import React, { useEffect, useState } from "react";
import "./../resources/styles/ProjectPresentation.scss";
import Image from "./../components/atomic/Image";
import ScrollIndicator from "./atomic/ScrollIndicator";

const ProjectPresentation = (props) => {
  const [textAnimation, setTextAnimation] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextAnimation(true);
    }, 500);
    if (textAnimation) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [textAnimation]);

  return (
    <section className="project-presentation">
      <Image
        src={props.project.data.mainImage}
        alt={props.project.data.name}
      ></Image>
      <div
        className={`project-presentation-title ${
          textAnimation === true ? "" : "start-up"
        }`}
      >
        <span>{props.project.data.name}</span>
        <span>{props.project.data.name}</span>
        <span>{props.project.data.name}</span>
        <span>{props.project.data.name}</span>
        <span>{props.project.data.name}</span>
        <span>{props.project.data.name}</span>
        <h1>{props.project.data.name}</h1>
      </div>
      <ScrollIndicator animationTimer={textAnimation ? 3 : 0}></ScrollIndicator>
    </section>
  );
};

export default ProjectPresentation;
