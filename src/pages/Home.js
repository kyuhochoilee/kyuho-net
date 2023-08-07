import React from "react";
import styles from "../styles/Home.module.css"; // Import the CSS Module

const Home = () => {
  return (
    <div>
      <div className={styles.header}>KYUHO LEE</div>
      <div className={styles.subHeader}>
        creative digital designer based in boston
      </div>
      <div className={styles.subHeader}>
        junior @ upenn studying design / psych / computer science
      </div>
      <div className={styles.button}>LET'S CONNECT</div>
    </div>
  );
};

export default Home;
