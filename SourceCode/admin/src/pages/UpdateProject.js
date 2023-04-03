import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectForm from "../components/ProjectForm/ProjectForm";
function UpdateProject(props) {
  const id = useParams().id;
  useEffect(() => {}, []);

  return (
    <div>
      <ProjectForm isEdit={true} />
    </div>
  );
}

export default UpdateProject;
