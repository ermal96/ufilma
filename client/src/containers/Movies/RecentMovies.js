import React from "react";
import { Card, Container, Title } from "../../components";
import { routes } from "../../routes";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderWrapper from "../../components/Slider/SliderWrapper";

const RecentMovies = ({ movies }) => {
  return (
    <Container>
      <Title>Recent</Title>
      <SliderWrapper>
        <Swiper navigation spaceBetween={10} slidesPerView="auto">
          {movies.map((movie) => (
            <SwiperSlide key={movie._id}>
              <Card
                ratio="2/3"
                backgroundImage={`url(${process.env.REACT_APP_SERVER}${movie.thumbnail})`}
                link={routes.movies + "/" + movie._id}
                quality={movie.quality}
                title={movie.name}
                categories={movie.categories}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </Container>
  );
};

export default RecentMovies;
