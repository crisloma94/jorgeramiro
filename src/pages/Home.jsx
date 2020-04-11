import React, { Component } from "react";
import data from "./../resources/projects.json";
import HeroPresentation from "./../components/HeroPresentation";
import ProjectSelector from "./../components/ProjectSelector";

class Home extends Component {
  state = {};

  render() {
    const projects = data.Projects;
    return (
      <React.Fragment>
        <HeroPresentation></HeroPresentation>
        <div className="container">
          <ProjectSelector projects={projects}></ProjectSelector>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
