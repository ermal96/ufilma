import React from "react";
import styled from "styled-components";
import AspectRatio from "react-aspect-ratio";

const UTopmovie = styled.div``;

const TopMovie = ({ movie }) => {
  return (
    <UTopmovie
      style={{ background: `url(https://ufilma.com/${movie.imageUrl})` }}
    >
      <AspectRatio
        ratio="16/9"
        style={{
          backgroundImage: `url(https://ufilma.com/${movie.imageUrl})`,
          backgroundSize: "cover",
        }}
      ></AspectRatio>
    </UTopmovie>
  );
};

export default TopMovie;
