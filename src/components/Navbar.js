import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css"; // Import the CSS Module

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      {" "}
      {/* Use the className from the CSS Module */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
