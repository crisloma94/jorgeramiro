import React, { useState, useCallback, useEffect } from "react";
import data from "./../resources/projects.json";
import HeroPresentation from "./../components/HeroPresentation";
import ProjectSelector from "./../components/ProjectSelector";
import "./../resources/styles/Home.scss";

const Home = () => {
  const projects = data.Projects;
  const position = document.body.getBoundingClientRect().y;
  // presentation: ready running hidden
  const [presentation, setPresentation] = useState("ready");

  const handleScroll = useCallback(() => {
    const newPosition = document.body.getBoundingClientRect().y;
    if (position - newPosition > 1 && presentation === "ready") {
      setPresentation("running");
      const presentationTimer = setTimeout(
        () => setPresentation("hidden"),
        1000
      );
      return () => {
        clearTimeout(presentationTimer);
      };
    }
  }, [setPresentation, position]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <React.Fragment>
      {presentation !== "hidden" && (
        <div className={`presentation ${presentation}`}>
          <HeroPresentation></HeroPresentation>
        </div>
      )}
      <div
        className={`container ${
          presentation === "ready" || presentation === "running" ? "hidden" : ""
        }`}
      >
        <ProjectSelector projects={projects}></ProjectSelector>
      </div>
    </React.Fragment>
  );
};

export default Home;
