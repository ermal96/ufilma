import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({ size, children, variant, href, ...rest }) => {
  return (
    <button className={cx(styles.button, styles[variant], styles[size])} {...rest}>
      {href ? <Link to={href}>{children}</Link> : children}
    </button>
  );
};

export default Button;
