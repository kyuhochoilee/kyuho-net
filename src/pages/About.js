import React from "react";
import Navbar from "../components/Navbar";
import genStyles from "../styles/GenStyles.module.css";
import aboutPicData from "../aboutPicData";
import ImageAbout from "../components/ImageAbout";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";
import picture from "../about/slide2.jpeg";

const About = () => {
  return (
    <div className={genStyles.container}>
      <Navbar pageTitle="MY STORY" />
      <div className={styles.view}>
        {aboutPicData.map((pic, index) => (
          <div className={styles.sectionContainer} key={pic.id}>
            {index % 2 === 1 ? ( // Check if the index is odd
              <div className={styles.aboutTextTwo}>
                <div className={styles.imageContainer}>
                  <ImageAbout
                    rect={pic.rect}
                    image1={pic.image1}
                    image2={pic.image2}
                    image3={pic.image3}
                    image4={pic.image4}
                    image5={pic.image5}
                  />
                </div>
                <div className={styles.about}>
                  <div className={styles.title}>
                    {pic.title}
                    <span className={styles.titleRest}>{pic.title2}</span>
                  </div>
                </div>
              </div>
            ) : (
              // Render in the opposite order for even indices
              <div className={styles.aboutTextOne}>
                <div className={styles.about}>
                  <div className={styles.title}>
                    {pic.title}
                    <span className={styles.titleRest}>{pic.title2}</span>
                  </div>
                </div>
                <div className={styles.imageContainer}>
                  <ImageAbout
                    rect={pic.rect}
                    image1={pic.image1}
                    image2={pic.image2}
                    image3={pic.image3}
                    image4={pic.image4}
                    image5={pic.image5}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
        <div className={styles.dividerThick}>WHAT I’M UP TO</div>
        <div className={styles.moreInfo}>
          <div className={styles.moreInfoText}>
            <div>
              i like to keep myself busy outside of classes. here’s what i do...
            </div>
            <div>
              <strong>co-director</strong> of{" "}
              <a
                className={styles.link}
                href="https://web.sas.upenn.edu/penn-cssp/"
                target="_blank"
              >
                community school student partnerships,
              </a>{" "}
              the largest student mentorship organization at penn
            </div>
            <div>
              <strong>president</strong> for{" "}
              <a
                className={styles.link}
                href="https://www.pennkeynotes.com/"
                target="_blank"
              >
                keynotes a cappella,
              </a>{" "}
              a co-ed a cappella group
            </div>
            <div>
              <strong>project lead </strong>and <strong>designer</strong> for{" "}
              <a
                className={styles.link}
                href="https://thesign.al/"
                target="_blank"
              >
                the signal,
              </a>{" "}
              a creative collective that supports unconventional paths at penn.
            </div>
            <div>
              i’m also a member of{" "}
              <a
                className={styles.link}
                href="https://icaphila.org/students/"
                target="_blank"
              >
                {" "}
                ica philadelphia's student board
              </a>{" "}
              and penn’s{" "}
              <a
                className={styles.link}
                href="https://www.instagram.com/pennksa/?hl=en"
                target="_blank"
              >
                korean student association.
              </a>
            </div>
            <div>
              aside from that, i also love writing and producing music, DJing,
              making digital art, and spending time with family and friends!
            </div>
          </div>

          <div className={styles.vertImageSpace}>
            <img className={styles.vertImageSpaceImage} src={picture} />
          </div>
        </div>
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
                href="https://drive.google.com/file/d/1TgKrv-7bE6TGvCO9_Dg8N8GGFCxUBZHR/view?usp=sharing"
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
