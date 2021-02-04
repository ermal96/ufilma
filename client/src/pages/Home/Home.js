import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { TopMovie, RecentMovies, SliderSection } from "../../containers";
import { Layout, Seo, Spinner } from "../../components";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const isLoading = useSelector(({ app }) => app.loading);

  return (
    <Layout>
      <Seo title="Kreu" description="Shiko filmat e fundit ne nje kualitet tjetër" />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <TopMovie movies={movies} />
          <RecentMovies movies={movies} />
          <SliderSection category="Aksion" movies={movies} />
          <SliderSection category="Komedi" movies={movies} />
          <SliderSection category="Romance" movies={movies} />
          <SliderSection category="Thriller" movies={movies} />
          <SliderSection category="Fantazi" movies={movies} />
          <SliderSection category="Fantashkencë" movies={movies} />
          <SliderSection category="Histori" movies={movies} />
          <SliderSection category="Luftë" movies={movies} />
        </>
      )}
    </Layout>
  );
};

export default Home;
