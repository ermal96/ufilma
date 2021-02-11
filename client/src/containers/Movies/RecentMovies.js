import React from "react";
import { Card, Container, Title } from "../../components";
import { routes } from "../../routes";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

const RecentMovies = ({ movies }) => {
  SwiperCore.use([Navigation]);

  return (
    <Container>
      <Title>Filmat e fundit</Title>

      <Swiper navigation spaceBetween={10} slidesPerView="auto">
        {movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <Card
              backgroundImage={`url(${process.env.REACT_APP_SERVER}${movie.thumbnail})`}
              link={routes.movies + "/" + movie._id}
              quality={movie.quality}
              title={movie.name}
              categories={movie.categories}
              id={movie._id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default RecentMovies;
