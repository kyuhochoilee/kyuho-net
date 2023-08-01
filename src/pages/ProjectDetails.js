import React from "react";
import { useParams } from "react-router-dom";
import projectDetailsData from "../projectDetailsData.json";

const ProjectDetails = () => {
  const { projectId } = useParams();

  // Get the additional details for the project from projectDetailsData.json
  const projectDetails = projectDetailsData[`${projectId}`];

  if (!projectDetails) {
    return <div>Loading...</div>;
  }

  // Use the title and details from projectDetailsData.json
  const { title, details } = projectDetails;

  return (
    <div>
      <h2>{title}</h2>
      <p>{details}</p>
    </div>
  );
};

export default ProjectDetails;
