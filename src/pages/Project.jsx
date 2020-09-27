import React from "react";
import data from "./../resources/projects.json";
import ProjectPresentation from "./../components/ProjectPresentation";
import ProjectInspo from "./../components/ProjectInspo";
import ProjectIdeation from "./../components/ProjectIdeation";
import Video from "./../components/Video";
import ProjectFinished from "./../components/ProjectFinished";
import NextProject from "./../components/NextProject";

const Project = (props) => {
  let project = data.Projects.filter(
    (project) => project.id === props.match.params.id
  );
  project = project[0];

  return (
    <React.Fragment>
      <ProjectPresentation project={project}></ProjectPresentation>
      <ProjectInspo projectInspo={project.data.inspo}></ProjectInspo>
      <ProjectIdeation></ProjectIdeation>
      <Video></Video>
      <ProjectFinished></ProjectFinished>
      <NextProject></NextProject>
    </React.Fragment>
  );
};

export default Project;
