import React from "react";
import ProjectForm from "../components/ProjectForm/ProjectForm";

function CreateProject(props) {
  return (
    <div>
      <ProjectForm isEdit={false} />
    </div>
  );
}

export default CreateProject;
