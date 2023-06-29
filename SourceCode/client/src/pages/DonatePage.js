import React from "react";
import DonateForm from "../components/DonateForm/DonateForm";
import { useParams } from "react-router-dom";

function DonatePage() {
  const { projectId } = useParams();
  console.log(projectId);
  return <DonateForm projectId={projectId} />;
}

export default DonatePage;
