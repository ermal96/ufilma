import React, { useState, useEffect } from "react";
import { Card, Container, Title } from "../../components";
import { routes } from "../../routes";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderWrapper from "../../components/Slider/SliderWrapper";

const ActionMovies = ({ movies }) => {
  const [actionMovies, setActionMovies] = useState("");

  useEffect(() => {
    setActionMovies(
      movies.filter((movie) => movie.categories[0].name === "Action")
    );
  }, [movies]);

  return (
    <Container>
      {actionMovies.length ? (
        <>
          <Title>Action</Title>
          <SliderWrapper>
            <Swiper navigation spaceBetween={25} slidesPerView="auto">
              {actionMovies.map((movie) => (
                <SwiperSlide key={movie._id}>
                  <Card
                    ratio="2/3"
                    backgroundImage={`url(${process.env.REACT_APP_SERVER}/${movie.thumbnail})`}
                    link={routes.movies + "/" + movie._id}
                    quality={movie.quality}
                    title={movie.name}
                    categories={movie.categories}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SliderWrapper>
        </>
      ) : null}
    </Container>
  );
};

export default ActionMovies;
