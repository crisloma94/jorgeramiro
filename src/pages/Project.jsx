import React, { Component } from "react";
import data from "./../resources/projects.json";

class Project extends Component {
  state = {};
  render() {
    let project = data.Projects.filter(
      project => project.id === this.props.match.params.id
    );
    project = project[0];
    return <h1>Project {project.data.name}</h1>;
  }
}

export default Project;
