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

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <Layout>
        <TopMovie movies={movies} />
        <RecentMovies movies={movies} />
        <SliderSection category="Action" movies={movies} />
        <SliderSection category="Thriller" movies={movies} />
        <SliderSection category="Horror" movies={movies} />
      </Layout>
    );
  }
};

export default Home;
