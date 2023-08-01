import React from "react";
import { Link } from "react-router-dom";

const Project = ({ title, image, category, projectId }) => {
  return (
    <Link to={`/projects/${projectId}`} className="project-link">
      <div className="project">
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>Category: {category}</p>
      </div>
    </Link>
  );
};

export default Project;
