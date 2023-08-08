import React from "react";
import Navbar from "../components/Navbar";
import genStyles from "../styles/GenStyles.module.css";

const About = () => {
  return (
    <div className={genStyles.container}>
      <Navbar pageTitle="MY STORY" />
      <h1>This is the About page.</h1>
    </div>
  );
};

export default About;
