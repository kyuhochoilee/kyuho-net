import React from "react";
import Artwork from "../components/Artwork";
import projectsData from "../artworksData";
import styles from "../styles/Projects.module.css"; // Import the CSS file
import Navbar from "../components/Navbar";
import genStyles from "../styles/GenStyles.module.css";
import Footer from "../components/Footer";

const Play = () => {
  return (
    <div className={genStyles.container}>
      <Navbar pageTitle="ART& MORE" />
      <div className={styles.projectList}>
        {" "}
        {/* Apply the "project-list" class */}
        {projectsData.map((project) => (
          <Artwork
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

export default Play;
