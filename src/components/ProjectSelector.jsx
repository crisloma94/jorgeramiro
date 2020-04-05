import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../resources/styles/ProjectSelector.scss";

class HeroPresentation extends Component {
  render() {
    const projects = this.props.projects;
    console.log("public_url", process.env.PUBLIC_URL);
    return (
      <section className="project-selector">
        <ul className="project-list">
          {projects.map((project, index) => (
            <li
              key={project.id}
              className={`project-link ${index === 0 ? "selected" : ""} ${
                index === 2 ? "last" : ""
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
  }
}

export default HeroPresentation;
