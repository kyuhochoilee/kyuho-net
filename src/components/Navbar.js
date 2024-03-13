import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css"; // Import the CSS Module

const Navbar = ({ pageTitle }) => {
  return (
    <nav className={styles.nav}>
      {" "}
      {/* Use the className from the CSS Module */}
      <div className={styles.logo}>
        <NavLink className={styles.rectangles} exact to="/">
          <div className={styles.rectangle1}></div>
          <div className={styles.rectangle2}></div>
          <div className={styles.rectangle3}></div>
          <div className={styles.rectangle4}></div>
        </NavLink>

        <div className={styles.pageTitle}>{pageTitle}</div>
        <div className={styles.rectangle5}></div>
      </div>
      <div className={styles.ulStyles}>
        <div className={styles.liStyles}>
          <NavLink exact to="/">
            home
          </NavLink>
        </div>
        <div className={styles.liStyles}>
          <NavLink to="/work" activeClassName={styles.active}>
            work
          </NavLink>
        </div>
        <div className={styles.liStyles}>
          <NavLink to="/art" activeClassName={styles.active}>
            art
          </NavLink>
        </div>
        <div className={styles.liStyles}>
          <NavLink to="/about" activeClassName={styles.active}>
            about
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
