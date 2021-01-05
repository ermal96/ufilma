import React from "react";
import { useSelector } from "react-redux";
import { TopMovieCard } from "../../components";
import styled from "styled-components";

const UTopMovie = styled.section``;

const TopMovie = () => {
  const topMovie = useSelector(({ movies }) => movies.recentMovies);

  return (
    <UTopMovie>
      {topMovie.length ? (
        <TopMovieCard key={topMovie[1]._id} movie={topMovie[1]} />
      ) : null}
    </UTopMovie>
  );
};

export default TopMovie;
