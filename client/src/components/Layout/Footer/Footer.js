import React from "react";
import styles from "./Footer.module.scss";

const UFooter = ({ children, ...rest }) => {
  return (
    <footer className={styles.footer} {...rest}>
      {children}
    </footer>
  );
};

export default UFooter;
