import React from "react";
import cx from "classnames";
import styles from "./Input.module.scss";

const Input = ({ size, variant, display, ...rest }) => {
  return (
    <input
      className={cx(
        styles.input,
        styles[size],
        styles[variant],
        styles[display]
      )}
      {...rest}
    />
  );
};

export default Input;
