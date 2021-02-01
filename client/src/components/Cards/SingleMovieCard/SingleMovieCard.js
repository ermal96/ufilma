import React from "react";
import styles from "./SingleMovieCard.module.scss";

const SingleMovieCard = ({ data }) => {
  return (
    <div className={styles.singleCard}>
      <span className={styles.singleCardYear}>{data.year}</span>
      <span className={styles.singleCardTime}>{data.time} min</span>

      <div className={styles.singleCardFlex}>
        <h1 className={styles.singleCardTitle}>{data.name}</h1>
        <p className={styles.singleCardQuality}>{data.quality}</p>
      </div>
      {data.categories
        ? data.categories.map((category) => {
            return (
              <span className={styles.singleCardCategories} key={category._id}>
                {category.name}
              </span>
            );
          })
        : null}

      <p className={styles.singleCardRated}>Vlerësimi: {data.ratio}</p>

      <p className={styles.singleCardBody}>{data.description}</p>
    </div>
  );
};

export default SingleMovieCard;
