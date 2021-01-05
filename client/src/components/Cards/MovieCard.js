import React from "react";
import styled from "styled-components";
import AspectRatio from "react-aspect-ratio";
import { Link } from "react-router-dom";
import { routes } from "../../routes";
import Player from "../Player/Player";

const UMovieCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.light};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.constants.radiusSm + "rem"};
  transition: transform 0.3s ease;
  .player {
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  &:hover {
    transform: scale(1.1);
    .player {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const MovieCard = ({ movie }) => {
  return (
    <UMovieCard>
      <Link to={routes.movies + "/" + movie._id}>
        <AspectRatio
          ratio="16/9"
          style={{
            backgroundImage: `url(${process.env.REACT_APP_SERVER}${movie.imageUrl})`,
            backgroundSize: "cover",
          }}
        >
          <div className="player">
            <Player src="/demo.mp4" />
          </div>
        </AspectRatio>
      </Link>
    </UMovieCard>
  );
};

export default MovieCard;
