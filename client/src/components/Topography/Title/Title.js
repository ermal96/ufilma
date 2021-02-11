import React from "react";
import styles from "./Title.module.scss";

const Title = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default Title;
