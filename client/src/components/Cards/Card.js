import React from "react";
import styled from "styled-components";
import AspectRatio from "react-aspect-ratio";
import { Link } from "react-router-dom";

const UMovieCardMeta = styled.div`
  display: flex;
  padding: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  background: #f3f3f3bf;
  width: 4rem;
  border-radius: 1px;
  height: 4rem;

  /* opacity: 0; */
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.primary};

  p {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const UMovieCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.light};
  cursor: pointer;
  border-radius: ${({ theme }) => theme.constants.radiusSm + "rem"};
  transition: transform 0.3s ease;
  position: relative;
  &:hover {
    transform: scale(1.1);

    ${UMovieCardMeta} {
      opacity: 1;
    }
  }
`;

const Card = ({ backgroundImage, ratio, link, title, categories }) => {
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
