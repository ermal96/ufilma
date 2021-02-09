import React from "react";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../../index";
import cx from "classnames";
import styles from "./Card.module.scss";

const Card = ({ backgroundImage, link, title, quality, id, variant }) => {
  return (
    <div className={cx(styles.card, styles[variant])}>
      <Link to={link}>
        <div
          className={styles.cardBg}
          style={{
            backgroundImage: backgroundImage,
          }}></div>
      </Link>
      <div className={styles.cardMeta}>
        <div className={styles.cardMetaWrapper}>
          {quality ? <p className={styles.cardMetaQuality}>{quality}</p> : null}
          {title ? <h3 className={styles.cardMetaTitle}>{title}</h3> : null}
        </div>
        <FavoriteButton movieId={id} movieName={title} />
      </div>
    </div>
  );
};

export default Card;
