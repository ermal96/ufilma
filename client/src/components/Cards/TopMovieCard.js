import React from "react";
import styled from "styled-components";
import AspectRatio from "react-aspect-ratio";
import { Button } from "../../components";
import { routes } from "../../routes";

const UTopmovie = styled.div`
  .react-aspect-ratio-placeholder {
    @media (max-width: 767px) {
      min-height: 40rem;
    }
    min-height: 50rem;
  }
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      #0d1117,
      #4244485e,
      #7c7d8126,
      #bcbcbe00,
      #ffffff00
    );
    z-index: 1;
  }
`;
const UTopMovieBody = styled.div`
  max-width: 40rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2.5rem;
  z-index: 2;
`;

const UTopMovieBodyYear = styled.p`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.light};
  display: inline-block;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
`;

const UTopMovieBodyTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const UTopMovieBodyDesc = styled.p`
  margin-bottom: 2.5rem;
  font-weight: 1.5rem;
`;

const TopMovie = ({ movie }) => {
  return (
    <UTopmovie>
      <AspectRatio
        ratio="16/7"
        style={{
          backgroundImage: `url(${process.env.REACT_APP_SERVER}${movie.imageUrl})`,
          backgroundSize: "cover",
        }}
      />

      <UTopMovieBody>
        <UTopMovieBodyYear>{movie.year}</UTopMovieBodyYear>
        <UTopMovieBodyTitle>{movie.name}</UTopMovieBodyTitle>
        <UTopMovieBodyDesc>{movie.description}</UTopMovieBodyDesc>
        <Button href={`${routes.movies}/${movie._id}`} variant="light">
          Watch now
        </Button>
      </UTopMovieBody>
    </UTopmovie>
  );
};

export default TopMovie;
