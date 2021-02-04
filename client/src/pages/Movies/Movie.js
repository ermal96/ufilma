import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player, Seo, Spinner } from "../../components";
import { getMovie } from "../../store/actions/moviesAction";
import SingleMovieCard from "../../components/Cards/SingleMovieCard/SingleMovieCard";
import { Layout } from "../../components";

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
        <>
          <Seo title={movie.name} description={movie.description} />
          <Player
            subtitle={movie.subtitle}
            title={movie.name}
            cover={movie.cover ? process.env.REACT_APP_SERVER + movie.cover : null}
            controls
            src={movie.videoUrl}
          />
          <SingleMovieCard data={movie} />{" "}
        </>
      )}
    </Layout>
  );
};

export default Movie;
