import React from "react";
import styles from "./Fade.module.scss";
const Fade = ({ children }) => {
  return <div className={styles.fade}>{children}</div>;
};

export default Fade;
