import React from "react";
import LogoSrc from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import cx from "classnames";
import styles from "./Logo.module.scss";

const Logo = ({ hideMobile }) => {
  return (
    <div className={cx(styles.logo, styles[hideMobile])}>
      <Link to={routes.home}>
        <img src={LogoSrc} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
