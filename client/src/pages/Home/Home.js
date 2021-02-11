import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { TopMovie, RecentMovies, SliderSection } from "../../containers";
import { Fade, Layout, Seo, Spinner } from "../../components";

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
        <Fade>
          <TopMovie movies={movies} />
          <RecentMovies movies={movies} />
          <SliderSection category="Aksion" />
          <SliderSection category="Komedi" />
          <SliderSection category="Romancë" />
          <SliderSection category="Thriller" />
          <SliderSection category="Fantazi" />
          <SliderSection category="Fantashkencë" />
          <SliderSection category="Histori" />
          <SliderSection category="Luftë" />
        </Fade>
      )}
    </Layout>
  );
};

export default Home;
