import React from "react";
import "./../resources/styles/NextProject.scss";
import Image from "./../components/atomic/Image";
import { Link } from "react-router-dom";

const NextProject = (props) => {
  const nextProject = props.nextProject.data;
  return (
    <Link to={`/projects/${props.nextProject.id}`}>
      <section className="next-project">
        <h2>{nextProject.name}</h2>
        <Image src={nextProject.mainImage} alt={nextProject.name}></Image>
        <div className="next-project-overlay"></div>
      </section>
    </Link>
  );
};

export default NextProject;
