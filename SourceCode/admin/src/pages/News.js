import React, { useState } from "react";
import ProjectList from "../components/ProjectList/ProjectList";

import NewsList from '../components/NewsList/NewsList.jsx'

function Projects(props) {
  const [query, setQuery] = useState("");
  const changeQueryHandler = (query) => {
    setQuery(query);
  };

  return (
    <div>
      <NewsList query={query} />
    </div>
  );
}

export default Projects;
