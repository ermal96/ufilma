import React, { useState, useEffect } from "react";
import { Card, Container, Title } from "../../components";
import { routes } from "../../routes";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderWrapper from "../../components/Slider/SliderWrapper";

const ThrillerMovies = ({ movies }) => {
  const [thrillerMovies, setThrillerMovies] = useState("");

  useEffect(() => {
    setThrillerMovies(
      movies.filter((movie) => movie.categories[0].name === "Thriller")
    );
  }, [movies]);

  return (
    <Container>
      {thrillerMovies.length ? (
        <>
          <Title>Thriller</Title>
          <SliderWrapper>
            <Swiper navigation spaceBetween={25} slidesPerView="auto">
              {thrillerMovies.map((movie) => (
                <SwiperSlide key={movie._id}>
                  <Card
                    ratio="2/3"
                    backgroundImage={`url(${process.env.REACT_APP_SERVER}${movie.imageUrl})`}
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

export default ThrillerMovies;
