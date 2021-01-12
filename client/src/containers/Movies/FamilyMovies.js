import React, { useState, useEffect } from "react";
import { Card, Container, Title } from "../../components";
import { routes } from "../../routes";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderWrapper from "../../components/Slider/SliderWrapper";

const FamilyMovies = ({ movies }) => {
  const [familyMovies, setfamilyMovies] = useState("");

  useEffect(() => {
    setfamilyMovies(
      movies.filter((movie) => movie.categories[0].name === "Family")
    );
  }, [movies]);

  return (
    <Container>
      {familyMovies.length ? (
        <>
          <Title>Family</Title>
          <SliderWrapper>
            <Swiper navigation spaceBetween={25} slidesPerView="auto">
              {familyMovies.map((movie) => (
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

export default FamilyMovies;
