import React from "react";
import Project from "../components/Project";
import projectsData from "../projectsData";
import styles from "../styles/Projects.module.css"; // Import the CSS file

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className={styles["project-list"]}>
        {" "}
        {/* Apply the "project-list" class */}
        {projectsData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            category={project.category}
            projectId={project.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
