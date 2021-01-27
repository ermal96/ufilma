import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "../../components";
import { getMovie } from "../../store/actions/moviesAction";
import styled from "styled-components";
import SingleMovieCard from "../../components/Cards/SingleMovieCard";
import { Layout } from "../../components";

const UMovieWrapper = styled.section``;

const Movie = ({ match }) => {
  const dispatch = useDispatch();
  const movie = useSelector(({ movies }) => movies.movie);
  useEffect(() => {
    dispatch(getMovie(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <Layout>
      {movie.name ? (
        <UMovieWrapper>
          <Player
            title={movie.name}
            thumbnail={process.env.REACT_APP_SERVER + movie.cover}
            controls
            src={movie.videoUrl}
          />

          <SingleMovieCard data={movie} />
        </UMovieWrapper>
      ) : null}
    </Layout>
  );
};

export default Movie;
