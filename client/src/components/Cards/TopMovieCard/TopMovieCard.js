import React from "react";
import { Button } from "../..";
import { routes } from "../../../routes";
import styles from "./TopMovieCard.module.scss";

const TopMovie = ({ movie }) => {
  return (
    <div className={styles.topCard}>
      <div
        className={styles.topCardBg}
        style={{
          backgroundImage: `url(${process.env.REACT_APP_SERVER}${movie.cover})`,
        }}
      />

      <div className={styles.topCardBody}>
        <p className={styles.topCardBodyYear}>{movie.year}</p>
        <h1 className={styles.topCardBodyTitle}>{movie.name}</h1>
        <p className={styles.topCardBodyDesc}>{movie.description.slice(0, 130)}...</p>
        <Button href={`${routes.movies}/${movie._id}`} variant="light">
          Shikoje Tani
        </Button>
      </div>
    </div>
  );
};

export default TopMovie;
