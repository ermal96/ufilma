import React from "react";
import styled from "styled-components";
import AspectRatio from "react-aspect-ratio";
import { Link } from "react-router-dom";
import { FavoriteButton } from "../index";

const UMovieCardMeta = styled.div`
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.main};
  min-height: 4rem;
  display: block;
  opacity: 0;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 10;
  display: flex;
  justify-content: space-between;

  &.position-relative {
    opacity: 1;
    background: transparent;
    color: ${({ theme }) => theme.colors.main};
    text-shadow: 0px 0px 1px ${({ theme }) => theme.colors.primary};
  }

  .user-favorite-movie {
    font-size: 1.6rem;
  }
  div {
    p {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.accent};
    }

    span {
      position: absolute;
    }
  }
`;

const UMovieCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.main};
  border-radius: ${({ theme }) => theme.constants.radiusSm + "rem"};
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  .react-aspect-ratio-placeholder {
    transition: transform 0.3s ease;
  }
  &:hover {
    .react-aspect-ratio-placeholder {
      transform: scale(1.4);
    }
    ${UMovieCardMeta} {
      opacity: 1;
    }
  }
`;

const Card = ({
  backgroundImage,
  ratio,
  link,
  title,
  quality,
  id,
  relative,
}) => {
  return (
    <UMovieCard>
      <Link to={link}>
        <AspectRatio
          ratio={ratio}
          style={{
            backgroundImage: backgroundImage,
            backgroundSize: "cover",
          }}
        />
      </Link>
      <UMovieCardMeta className={relative ? "position-relative" : null}>
        <div>
          {quality ? <p>{quality}</p> : null}
          {title ? <h3>{title}</h3> : null}
        </div>
        <FavoriteButton movieId={id} />
      </UMovieCardMeta>
    </UMovieCard>
  );
};

export default Card;
