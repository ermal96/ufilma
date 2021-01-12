import React, { useState, useEffect } from "react";
import { Card, Container, Title } from "../../components";
import { routes } from "../../routes";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderWrapper from "../../components/Slider/SliderWrapper";

const KomediMovies = ({ movies }) => {
  const [komediMovies, setKomediMovies] = useState("");

  useEffect(() => {
    setKomediMovies(
      movies.filter((movie) => movie.categories[0].name === "Komedi")
    );
  }, [movies]);

  return (
    <Container>
      {komediMovies.length ? (
        <>
          <Title>Komedi</Title>
          <SliderWrapper>
            <Swiper navigation spaceBetween={25} slidesPerView="auto">
              {komediMovies.map((movie) => (
                <SwiperSlide
                  style={{ maxWidth: "250px", marginTop: "2.5rem" }}
                  key={movie._id}
                >
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

export default KomediMovies;
