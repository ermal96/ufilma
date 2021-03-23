import React from "react";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../../index";
import cx from "classnames";
import styles from "./Card.module.scss";
import Timeline from "../../Player/Timeline/Timeline";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ backgroundImage, link, title, quality, id, variant, timeline }) => {
  return (
    <>
      <div className={cx(styles.card, styles[variant])}>
        <Link aria-label={title} to={link}>
          <LazyLoadImage alt={title} className={styles.cardBg} src={backgroundImage} />
        </Link>
        <div className={styles.cardMeta}>
          <div className={styles.cardMetaWrapper}>
            {quality ? <p className={styles.cardMetaQuality}>{quality}</p> : null}
            {title ? <h3 className={styles.cardMetaTitle}>{title}</h3> : null}
          </div>
          <FavoriteButton movieId={id} movieName={title} />
        </div>
      </div>
      {timeline ? (
        <Timeline max={timeline.duration} value={timeline.playedTime} onChange={() => null} />
      ) : null}
    </>
  );
};

export default Card;
