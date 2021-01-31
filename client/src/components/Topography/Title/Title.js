import React from "react";
import styles from "./Title.module.scss";

const Title = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
