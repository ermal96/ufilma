import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import {
  addFavorite,
  removeFavorite,
} from "../../../store/actions/userActions";
import styled from "styled-components";

const UMovieFavorite = styled.span`
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.colors.accent};
    font-size: inherit;
  }
`;

const FavoriteButton = ({ movieId }) => {
  const user = useSelector(({ user }) => user.user);
  const favoriteMovies = useSelector(({ user }) => user.favoriteMovies);
  const isLoaded = useSelector(({ user }) => user.loaded);

  const dispatch = useDispatch();

  const addFavoriteMovie = () => {
    dispatch(
      addFavorite({
        userId: user.id,
        movieId: movieId,
      })
    );
  };

  const removeFavoriteMovie = () => {
    dispatch(
      removeFavorite({
        userId: user.id,
        movieId: movieId,
      })
    );
  };

  return (
    <>
      {isLoaded && movieId && user.id ? (
        favoriteMovies.includes(movieId) ? (
          <UMovieFavorite
            className="user-favorite-movie"
            title="Hiq nga filmat e preferuar"
            onClick={removeFavoriteMovie}
          >
            <RiHeart3Fill />
          </UMovieFavorite>
        ) : (
          <UMovieFavorite
            className="user-favorite-movie"
            title="Shto tek filmat e preferuar"
            onClick={addFavoriteMovie}
          >
            <RiHeart3Line />
          </UMovieFavorite>
        )
      ) : null}
    </>
  );
};

export default FavoriteButton;
