import React from "react";
import Navbar from "../components/Navbar";
import genStyles from "../styles/GenStyles.module.css";

const Contact = () => {
  return (
    <div className={genStyles.container}>
      <Navbar pageTitle="REACH ME" />
      <h1>This is the Contact page.</h1>
    </div>
  );
};

export default Contact;
