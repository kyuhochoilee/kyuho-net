import React from "react";
import Project from "../components/Project";
import projectsData from "../projectsData";
import styles from "../styles/Projects.module.css"; // Import the CSS file
import Navbar from "../components/Navbar";
import genStyles from "../styles/GenStyles.module.css";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div className={genStyles.container}>
      <Navbar pageTitle="MY WORK" />
      <div className={styles.projectList}>
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
      <Footer />
    </div>
  );
};

export default Projects;
