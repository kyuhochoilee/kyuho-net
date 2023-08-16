import React from "react";
import Navbar from "../components/Navbar";
import genStyles from "../styles/GenStyles.module.css";
import aboutPicData from "../aboutPicData";
import ImageAbout from "../components/ImageAbout";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";
import rectangle from "../about/aboutRectContact.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={genStyles.container}>
      <Navbar pageTitle="MY STORY" />
      <div className={styles.view}>
        {aboutPicData.map((pic) => (
          <div className={styles.sectionContainer}>
            <div className={styles.imageContainer}>
              <ImageAbout
                key={pic.id}
                rect={pic.rect}
                image1={pic.image1}
                image2={pic.image2}
                image3={pic.image3}
                image4={pic.image4}
                image5={pic.image5}
              />
            </div>

            <div className={styles.dividerContainer}>
              <div className={styles.divider}></div>
            </div>
            <div className={styles.about}>
              <div className={styles.title}>
                <h3>{pic.title}</h3>
              </div>
              <div className={styles.spacer}></div>
              <p>{pic.desc}</p>
            </div>
            {pic.desc2 && (
              <div className={styles.about}>
                {pic.title2 && (
                  <div className={styles.title}>
                    <h3>{pic.title2}</h3>
                  </div>
                )}
                <div className={styles.spacer}></div>
                <p>{pic.desc2}</p>
              </div>
            )}
          </div>
        ))}

        <div className={styles.rectangleContainer}>
          <div className={styles.contactTextContainer}>
            <div className={styles.contactText}>
              don’t be a stranger! say hi at kyuho@upenn.edu :)
            </div>
            <div className={styles.linkContainer}>
              <a
                className={styles.email}
                href="mailto:kyuho@upenn.edu"
                target="_blank"
              >
                <div className={styles.button1}>
                  <div className={styles.buttonText1}>CONTACT ME</div>
                </div>
              </a>
              <a
                href="https://drive.google.com/file/d/1E5eWgE95D1LtoCi6vUF2PF6S-OCcfoMB/view?usp=sharing"
                target="_blank"
              >
                <div className={styles.button}>
                  <div className={styles.buttonText}>MY RESUMÉ</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
