import React, { useRef, useEffect } from "react";
import styles from "../styles/Image.module.css";

const Image = ({ src, alt, className }) => {
  return (
    <div className={styles.rectangleContainer2}>
      <img src={src} alt={alt} className={styles.pic} />
    </div>
  );
};

export default Image;
