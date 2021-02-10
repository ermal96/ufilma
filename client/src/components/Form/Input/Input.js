import React from "react";
import cx from "classnames";
import styles from "./Input.module.scss";

const Input = ({ size, variant, display, icon, ...rest }) => {
  return (
    <div className={styles.inputWrapper}>
      {icon}
      <input withicon={icon ? "true" : "false"} className={cx(styles.input, styles[size], styles[variant], styles[display])} {...rest} />
    </div>
  );
};

export default Input;
