import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { TopMovie, RecentMovies, SliderSection } from "../../containers";
import { Layout, Spinner } from "../../components";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const isLoading = useSelector(({ app }) => app.loading);

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TopMovie movies={movies} />
          <RecentMovies movies={movies} />
          <SliderSection category="Aksion" movies={movies} />
          <SliderSection category="Komedi" movies={movies} />
          <SliderSection category="Romance" movies={movies} />
        </>
      )}
    </Layout>
  );
};

export default Home;
