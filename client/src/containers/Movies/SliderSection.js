import React, { useState, useEffect } from "react";
import { Card, Container, Title } from "../../components";
import { routes } from "../../routes";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useSelector } from "react-redux";

const SliderSection = ({ category }) => {
  const [sliderSection, setSliderSection] = useState("");
  const movies = useSelector(({ movies }) => movies.movies);

  SwiperCore.use([Navigation]);

  useEffect(() => {
    setSliderSection(movies.filter((movie) => movie.categories[0].name === category));
  }, [movies, category]);

  return (
    <>
      {sliderSection.length ? (
        <Container>
          <Title>{category}</Title>

          <div className="slider-with-navigation">
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
          </div>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default SliderSection;
