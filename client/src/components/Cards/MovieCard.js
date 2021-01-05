import React from "react";
import styled from "styled-components";
import AspectRatio from "react-aspect-ratio";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

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
      <Link to={routes.movies + "/" + movie._id}>
        <AspectRatio
          ratio="214/317"
          style={{
            backgroundImage: `url(${process.env.REACT_APP_SERVER}${movie.imageUrl})`,
            backgroundSize: "cover",
          }}
        ></AspectRatio>
      </Link>
    </UMovieCard>
  );
};

export default MovieCard;
