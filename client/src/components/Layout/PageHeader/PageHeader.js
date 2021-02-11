import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageHeader.module.scss";

const PageHeader = ({ title, description, imageUrl, height, svgUrl }) => {
  return (
    <div height={height} className={styles.pageHeader} style={{ backgroundImage: `url(${imageUrl})`, height: height }}>
      <div className={styles.pageHeaderBody}>
        <h1 className={styles.pageHeaderBodyTitle}>{title}</h1>
        <p className={styles.pageHeaderBodyDesc}>{description}</p>
        <div className={styles.pageHeaderBodyBreadcrumb}>
          <Link to="/">Kreu</Link> <span>{title}</span>
        </div>
      </div>
      {svgUrl ? <img className={styles.imgSvg} src={svgUrl} alt="Imazh" /> : null}
    </div>
  );
};

export default PageHeader;
