import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "./../resources/projects.json";

class Home extends Component {
  state = {};

  render() {
    const projects = data.Projects;
    return (
      <React.Fragment>
        <h1>Homepage</h1>
        <ul>
          {projects.map(project => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <li>{project.name}</li>
            </Link>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
