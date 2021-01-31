import React from "react";
import cx from "classnames";
import styles from "./Form.module.scss";

const Form = ({ position, children, ...rest }) => {
  return (
    <form className={cx(styles.form, styles[position])} {...rest}>
      {children}
    </form>
  );
};

export default Form;
