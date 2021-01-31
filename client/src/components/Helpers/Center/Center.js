import React from "react";
import styles from "./Center.module.scss";

const Center = ({ children, ...rest }) => {
  return (
    <div className={styles.center} {...rest}>
      {children}
    </div>
  );
};

export default Center;
