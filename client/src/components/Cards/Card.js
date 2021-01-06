import React from "react";
import styled from "styled-components";
import AspectRatio from "react-aspect-ratio";
import { Link } from "react-router-dom";

const UMovieCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.light};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.constants.radiusSm + "rem"};
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Card = ({ backgroundImage, ratio, link }) => {
  return (
    <UMovieCard>
      <Link to={link}>
        <AspectRatio
          ratio={ratio}
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: "cover",
          }}
        ></AspectRatio>
      </Link>
    </UMovieCard>
  );
};

export default Card;
