import React from "react";
import data from "./../resources/projects.json";
import ProjectPresentation from "./../components/ProjectPresentation";
import ProjectInspo from "./../components/ProjectInspo";
import ProjectIdeation from "./../components/ProjectIdeation";
import ProjectFinished from "./../components/ProjectFinished";
import NextProject from "./../components/NextProject";
import Footer from "./../components/Footer";

const Project = (props) => {
  const project = data.Projects.find(
    (project) => project.id === props.match.params.id
  );
  const projectIndex = data.Projects.findIndex(
    (project) => project.id === props.match.params.id
  );
  const nextProject = data.Projects[projectIndex + 1]
    ? data.Projects[projectIndex + 1]
    : data.Projects[0];

  return (
    <React.Fragment>
      <ProjectPresentation project={project}></ProjectPresentation>
      <ProjectInspo projectInspo={project.data.inspo}></ProjectInspo>
      <ProjectIdeation
        projectIdeation={project.data.sketching}
      ></ProjectIdeation>
      <ProjectFinished
        projectFinished={project.data.finalProduct}
      ></ProjectFinished>
      <NextProject nextProject={nextProject}></NextProject>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Project;
