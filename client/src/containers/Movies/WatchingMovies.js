import React, { useEffect } from "react";
import { Card, Container, Title } from "../../components";
import { routes } from "../../routes";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useSelector, useDispatch } from "react-redux";
import { getWatchingMovies } from "../../store/actions/moviesAction";

const WatchingMovies = () => {
  SwiperCore.use([Navigation]);

  const dispatch = useDispatch();
  const moviesId = useSelector(({ user }) => user.watching);
  const watchingMovies = useSelector(({ movies }) => movies.userWatching);

  useEffect(() => {
    if (moviesId.length) {
      dispatch(getWatchingMovies(moviesId));
    }
  }, [dispatch, moviesId]);

  return (
    <Container>
      <Title>Vazhdoni te shikoni</Title>

      <Swiper navigation spaceBetween={10} slidesPerView="auto">
        {watchingMovies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <Card
              timeline={{
                playedTime: 50,
                duration: 200,
              }}
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

export default WatchingMovies;
