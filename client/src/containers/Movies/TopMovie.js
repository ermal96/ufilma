import React from "react";
import { TopMovieCard } from "../../components";
import styled from "styled-components";

const UTopMovie = styled.section`
  height: 100%;
`;

const TopMovie = ({ movies }) => {
  return (
    <UTopMovie>
      <TopMovieCard key={movies[0]._id} movie={movies[0]} />
    </UTopMovie>
  );
};

export default TopMovie;
