import React from "react";
import { useSelector } from "react-redux";
import { TopMovieCard } from "../../components";
import styled from "styled-components";

const UTopMovie = styled.section`
  margin-bottom: 5rem;
`;

const TopMovie = ({ movie }) => {
  const topMovie = useSelector(({ movies }) => movies.recentMovies);

  return (
    <div>
      <UTopMovie>
        {TopMovie.length ? (
          <TopMovieCard key={topMovie[0]._id} movie={topMovie[0]} />
        ) : null}
      </UTopMovie>
    </div>
  );
};

export default TopMovie;
