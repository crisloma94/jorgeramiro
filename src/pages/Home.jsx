import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "./../resources/projects.json";
import HeroPresentation from "./../components/HeroPresentation";

class Home extends Component {
  state = {};

  render() {
    const projects = data.Projects;
    return (
      <React.Fragment>
        <HeroPresentation></HeroPresentation>
        <ul>
          {projects.map(project => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <li>{project.data.name}</li>
            </Link>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
