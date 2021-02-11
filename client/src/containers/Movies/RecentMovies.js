import React from "react";
import { Card, Container, Title } from "../../components";
import { routes } from "../../routes";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useSelector } from "react-redux";

const RecentMovies = () => {
  SwiperCore.use([Navigation]);

  const movies = useSelector(({ movies }) => movies.movies);

  return (
    <Container>
      <Title>Filmat e fundit</Title>
      <div className="slider-with-navigation">
        <Swiper navigation spaceBetween={10} slidesPerView="auto">
          {movies.slice(0, 10).map((movie) => (
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
      </div>
    </Container>
  );
};

export default RecentMovies;
