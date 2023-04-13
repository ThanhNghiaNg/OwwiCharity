import React, { useState } from "react";
import ProjectList from "../components/ProjectList/ProjectList";

import ProjectHeader from "../components/ProjectList/ProjectHeader";

function Projects(props) {
  const [query, setQuery] = useState("");
  const changeQueryHandler = (query) => {
    setQuery(query);
  };

  return (
    <div>
      <ProjectHeader onChangeQuery={changeQueryHandler} />
      <ProjectList query={query} />
    </div>
  );
}

export default Projects;
