import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "../../components";
import { getMovie } from "../../store/actions/moviesAction";
import styled from "styled-components";
import SingleMovieCard from "../../components/Cards/SingleMovieCard";

const UMovieWrapper = styled.section``;

const Movie = ({ match }) => {
  const dispatch = useDispatch();
  const movie = useSelector(({ movies }) => movies.movie);
  useEffect(() => {
    dispatch(getMovie(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      {movie ? (
        <UMovieWrapper>
          <Player
            title={movie.name}
            thumbnail={process.env.REACT_APP_SERVER + movie.imageUrl}
            controls
            src={movie.videoUrl}
          />

          <SingleMovieCard data={movie} />
        </UMovieWrapper>
      ) : null}
    </>
  );
};

export default Movie;
