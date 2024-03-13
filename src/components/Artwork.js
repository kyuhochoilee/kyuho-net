import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Project.module.css";

const Artwork = ({ title, image, category, projectId }) => {
  return (
    <Link to={`/play/${projectId}`} className="project-link">
      <div className={styles.projectContainer}>
        <img src={image} alt={title} />
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.category}>{category}</div>
        </div>
      </div>
    </Link>
  );
};

export default Artwork;
