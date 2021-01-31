import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Spinner.module.scss";

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Logo />
    </div>
  );
};

export default Spinner;
