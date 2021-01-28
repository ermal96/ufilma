import React from "react";
import styled from "styled-components";
import AspectRatio from "react-aspect-ratio";
import { Link } from "react-router-dom";
import FavoriteButton from "../Base/FavoriteButton";

const UMovieCardMeta = styled.div`
  padding: 1rem;
  position: absolute;
  z-index: 5 !important;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.light};
  min-height: 4rem;
  display: block;
  opacity: 0;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 10;
  display: flex;
  justify-content: space-between;
  .user-favorite-movie {
    font-size: 1.6rem;
  }
  div {
    p {
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.secondary};
    }

    span {
      position: absolute;
    }
  }
`;

const UMovieCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.constants.radiusSm + "rem"};
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
  .react-aspect-ratio-placeholder {
    transition: transform 0.3s ease;
  }
  &:hover {
    .react-aspect-ratio-placeholder {
      transform: scale(1.3);
    }
    ${UMovieCardMeta} {
      opacity: 1;
    }
  }
`;

const Card = ({ backgroundImage, ratio, link, title, quality, id }) => {
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
      <UMovieCardMeta>
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
