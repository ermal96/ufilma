import React from "react";
import styled from "styled-components";
import AspectRatio from "react-aspect-ratio";
import { Link } from "react-router-dom";

const UMovieCardMeta = styled.div`
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.light};
  min-height: 4rem;
  display: block;
  opacity: 0;
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
  overflow: hidden;
  div:first-child {
    transition: transform 0.3s ease;
  }
  &:hover {
    div:first-child {
      transform: scale(1.3);
    }
    ${UMovieCardMeta} {
      opacity: 1;
    }
  }
`;

const Card = ({ backgroundImage, ratio, link, title, quality }) => {
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
        <UMovieCardMeta>
          <p>{quality}</p>
          <h3>{title}</h3>
        </UMovieCardMeta>
      </Link>
    </UMovieCard>
  );
};

export default Card;
