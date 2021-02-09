import React from "react";
import styles from "./SingleMovieCard.module.scss";
import { FavoriteButton } from "../../index";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";

const SingleMovieCard = ({ data }) => {
  return (
    <div className={styles.singleCard}>
      <div className={styles.singleCardFlex}>
        <div>
          <span className={styles.singleCardYear}>{data.year}</span>
          <span className={styles.singleCardTime}>{data.time} min</span>
        </div>
        <div className={styles.favorites}>
          <p className={styles.singleCardQuality}>{data.quality}</p>
          <FavoriteButton movieId={data._id} movieName={data.name} size="md" />
        </div>
      </div>

      <h1 className={styles.singleCardTitle}>{data.name}</h1>

      {data.categories
        ? data.categories.map((category) => {
            return (
              <Link to={routes.categories + "/" + category._id} className={styles.singleCardCategories} key={category._id}>
                {category.name}
              </Link>
            );
          })
        : null}

      <p className={styles.singleCardRated}>Vlerësimi: {data.ratio}</p>

      <p className={styles.singleCardBody}>{data.description}</p>
    </div>
  );
};

export default SingleMovieCard;
