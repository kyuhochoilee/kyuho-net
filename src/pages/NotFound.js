import React from "react";
import styles from "../styles/NotFound.module.css"; // Import the CSS Module
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <h1 className={styles.error}>404 Not Found</h1>
    </div>
  );
};

export default NotFound;
