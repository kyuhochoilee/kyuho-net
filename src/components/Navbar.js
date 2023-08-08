import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css"; // Import the CSS Module

const Navbar = ({ pageTitle }) => {
  return (
    <nav className={styles.nav}>
      {" "}
      {/* Use the className from the CSS Module */}
      <div className={styles.logo}>
        <div className={styles.rectangles}>
          <div className={styles.rectangle1}></div>
          <div className={styles.rectangle2}></div>
          <div className={styles.rectangle3}></div>
          <div className={styles.rectangle4}></div>
        </div>
        <div className={styles.pageTitle}>{pageTitle}</div>
        <div className={styles.rectangle5}></div>
      </div>
      <ul>
        <li>
          <NavLink exact to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" activeClassName={styles.active}>
            work
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={styles.active}>
            about
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
