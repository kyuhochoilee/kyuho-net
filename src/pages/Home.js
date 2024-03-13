import React from "react";
import styles from "../styles/Home.module.css"; // Import the CSS Module
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.textContainer}>
      <div className={styles.header}>KYUHO LEE</div>
      <div className={styles.subHeader}>
        digital product designer based in boston
      </div>
      <div className={styles.subHeader}>
        junior @ upenn studying design / psych / computer science
      </div>
      <div className={styles.linkContainer}>
        <a
          className={styles.email}
          href="mailto:kyuho@upenn.edu"
          target="_blank"
        >
          <div className={styles.button}>
            <div className={styles.buttonText}>LET'S CONNECT</div>
          </div>
        </a>
      </div>

      <nav className={styles.nav}>
        {" "}
        {/* Use the className from the CSS Module */}
        <div className={styles.rectangles}>
          <div className={styles.rectangle1}></div>
          <div className={styles.rectangle2}></div>
          <div className={styles.rectangle3}></div>
          <div className={styles.rectangle4}></div>
        </div>
        <div className={styles.rectangle5}></div>
        <ul>
          <li>
            <Link to="/work">work</Link>
          </li>
          <li>
            <Link to="/art">art</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
