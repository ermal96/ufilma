import React, { useState, useEffect } from "react";
import { Card, Container, Title } from "../../components";
import { routes } from "../../routes";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

const SliderSection = ({ movies, category }) => {
  const [sliderSection, setSliderSection] = useState("");

  SwiperCore.use([Navigation]);

  useEffect(() => {
    setSliderSection(
      movies.filter((movie) => movie.categories[0].name === category)
    );
  }, [movies, category]);

  return (
    <>
      {sliderSection.length ? (
        <Container>
          <Title>{category}</Title>

          <Swiper navigation spaceBetween={10} slidesPerView="auto">
            {sliderSection.map((movie) => (
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
      ) : (
        ""
      )}
    </>
  );
};

export default SliderSection;
