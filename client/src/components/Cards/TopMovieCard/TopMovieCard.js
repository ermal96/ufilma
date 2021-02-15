import React from "react";
import { Button } from "../..";
import { routes } from "../../../routes";
import styles from "./TopMovieCard.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import "swiper/components/effect-fade/effect-fade.scss";

const TopMovie = ({ movies }) => {
  SwiperCore.use([Autoplay, EffectFade]);

  return (
    <Swiper effect="fade" loop={true} autoplay={{ delay: 10000 }}>
      {movies.slice(0, 5).map((movie) => (
        <SwiperSlide key={movie._id}>
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopMovie;
