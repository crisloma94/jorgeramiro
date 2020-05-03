import React, { useState, useCallback, useEffect } from "react";
import data from "./../resources/projects.json";
import HeroPresentation from "./../components/HeroPresentation";
import ProjectSelector from "./../components/ProjectSelector";
import "./../resources/styles/Home.scss";

const Home = () => {
  const projects = data.Projects;
  // presentation: ready running hidden
  const [presentation, setPresentation] = useState("ready");

  const handleScroll = useCallback(
    (event) => {
      if (event.deltaY > 1 && presentation === "ready") {
        setPresentation("running");
        const presentationTimer = setTimeout(
          () => setPresentation("hidden"),
          800
        );
        return () => {
          clearTimeout(presentationTimer);
        };
      }
    },
    [presentation]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      window.addEventListener("wheel", handleScroll);
    }, 4000);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", handleScroll);
    };
  }, [handleScroll]);

  return (
    <React.Fragment>
      {presentation !== "hidden" && (
        <div className={`presentation ${presentation}`}>
          <HeroPresentation></HeroPresentation>
        </div>
      )}
      {presentation === "hidden" && (
        <div
          className={`container ${
            presentation === "ready" || presentation === "running"
              ? "invisible"
              : ""
          }`}
        >
          <ProjectSelector projects={projects}></ProjectSelector>
        </div>
      )}
    </React.Fragment>
  );
};

export default Home;
