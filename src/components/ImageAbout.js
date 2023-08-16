import React from "react";
import styles from "../styles/ImageAbout.module.css";

const ImageAbout = ({ id, rect, image1, image2, image3, image4, image5 }) => {
  return (
    <div className={styles.rectangleContainer}>
      <div className={styles.imagesContainer}>
        <img src={image1} alt={id} className={styles.pic1} />
        <img src={image2} alt={id} className={styles.pic2} />
        <img src={image3} alt={id} className={styles.pic3} />
        <img src={image4} alt={id} className={styles.pic4} />
        <img src={image5} alt={id} className={styles.pic5} />
      </div>
      <img src={rect} alt={id} className={styles.rect} />
    </div>
  );
};

export default ImageAbout;
