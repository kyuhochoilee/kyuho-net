import React from "react";
import styles from "../styles/Footer.module.css"; // Import the CSS Module
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftCorner}>
        <a
          className={styles.email}
          href="mailto:kyuho@upenn.edu"
          target="_blank"
        >
          kyuho@upenn.edu
        </a>
        <div className={styles.subtitle}>
          this website was built with react.js
        </div>
      </div>
      <div className={styles.logos}>
        <a href="https://github.com/kyuhochoilee" target="_blank">
          <img className={styles.link} src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/kyuholee0/" target="_blank">
          <img className={styles.link} src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
