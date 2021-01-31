import React from "react";
import cx from "classnames";
import styles from "./Background.module.scss";

const Background = ({ children, variant }) => {
  return <section className={cx(styles.background, styles[variant])}>{children}</section>;
};

export default Background;
