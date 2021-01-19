import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { TopMovie, RecentMovies, SliderSection } from "../../containers";
import "swiper/swiper.scss";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return movies.length ? (
    <div>
      <TopMovie movies={movies} />
      <RecentMovies movies={movies} />
      <SliderSection category="Action" movies={movies} />
      <SliderSection category="Thriller" movies={movies} />
      <SliderSection category="Horror" movies={movies} />
    </div>
  ) : (
    <p>loading</p>
  );
};

export default Home;
