import React from "react";
import Navbar from "../components/Navbar";
import genStyles from "../styles/GenStyles.module.css";
import aboutPicData from "../aboutPicData";
import ImageAbout from "../components/ImageAbout";

const About = () => {
  return (
    <div className={genStyles.container}>
      <Navbar pageTitle="MY STORY" />
      {aboutPicData.map((pic) => (
        <ImageAbout
          key={pic.id}
          rect={pic.rect}
          image1={pic.image1}
          image2={pic.image2}
          image3={pic.image3}
          image4={pic.image4}
          image5={pic.image5}
        />
      ))}
    </div>
  );
};

export default About;
