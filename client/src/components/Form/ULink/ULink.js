import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import styles from "./ULink.module.scss";

const ULink = ({ title, to }) => {
  return (
    <div className={styles.uLink}>
      <Link to={to}>
        <span>{title}</span> <BsArrowRight />
      </Link>
    </div>
  );
};

export default ULink;
