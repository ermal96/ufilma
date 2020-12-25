import React from "react";
import styled from "styled-components";
import AspectRatio from "react-aspect-ratio";

const UMovieCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.light};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.constants.radiusSm + "rem"};
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const MovieCard = ({ movie }) => {
  return (
    <UMovieCard>
      <AspectRatio
        ratio="214/317"
        style={{
          backgroundImage: `url(https://ufilma.com/${movie.imageUrl})`,
          backgroundSize: "cover",
        }}
      ></AspectRatio>
    </UMovieCard>
  );
};

export default MovieCard;
