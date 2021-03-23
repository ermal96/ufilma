import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fade, Player, Seo, Spinner } from "../../components";
import { getMovie } from "../../store/actions/moviesAction";
import { Layout } from "../../components";

const SingleMovieCard = React.lazy(() =>
  import("../../components/Cards/SingleMovieCard/SingleMovieCard")
);

const Movie = ({ match }) => {
  const dispatch = useDispatch();
  const movie = useSelector(({ movies }) => movies.movie);
  const isLoading = useSelector(({ app }) => app.loading);

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(getMovie(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <Fade>
          <Seo title={movie.name} description={movie.description} />
          <Player
            subtitle={movie.subtitle}
            title={movie.name}
            cover={movie.cover ? process.env.REACT_APP_SERVER + movie.cover : null}
            controls
            src={movie.videoUrl}
          />
          <Suspense fallback="">
            <SingleMovieCard data={movie} />
          </Suspense>
        </Fade>
      )}
    </Layout>
  );
};

export default Movie;
