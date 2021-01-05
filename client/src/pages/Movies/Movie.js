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
            src="https://m2.vudeo.net/2vp3xa6s3yvjdohiloobrmwbqjikd3lujpefa2p3k6mywvx6dm7io7rmdpga/v.mp4"
          />
          <SingleMovieCard data={movie} />
        </UMovieWrapper>
      ) : null}
    </>
  );
};

export default Movie;
