import React from "react";
import ProjectList from "../components/ProjectList/ProjectList";
import ProjectBanner from "../components/ProjectList/ProjectBanner";

function Projects(props) {
  return (
    <>
      <ProjectBanner />
      <ProjectList />
    </>
  );
}

export default Projects;
