import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
import { addFavorite, removeFavorite } from "../../../../store/actions/userActions";
import cx from "classnames";
import styles from "./FavoriteButton.module.scss";

const FavoriteButton = ({ movieId, size }) => {
  const user = useSelector(({ user }) => user.user);
  const isLoggedIn = useSelector(({ user }) => user.loggedIn);
  const favoriteMovies = useSelector(({ user }) => user.favoriteMovies);

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
      {movieId && isLoggedIn ? (
        favoriteMovies.includes(movieId) ? (
          <button className={cx(styles.favoriteButton, styles[size])} title="Hiq nga filmat e preferuar" onClick={removeFavoriteMovie}>
            <RiHeart3Fill />
          </button>
        ) : (
          <button className={cx(styles.favoriteButton, styles[size])} title="Shto tek filmat e preferuar" onClick={addFavoriteMovie}>
            <RiHeart3Line />
          </button>
        )
      ) : null}
    </>
  );
};

export default FavoriteButton;
