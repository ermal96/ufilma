import React from "react";
import styled from "styled-components";

const UMovieCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.light};
  padding: 20px;
`;

const MovieCard = ({ movie }) => {
  return (
    <UMovieCard>
      <h1>{movie.name}</h1>
      <p>Year: {movie.year}</p>
      {movie.categories.map((category) => (
        <span key={category._id}>{category.name}</span>
      ))}
    </UMovieCard>
  );
};

export default MovieCard;
