import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiHeart2Line, RiHeart2Fill } from "react-icons/ri";
import { addFavorite, removeFavorite } from "../../../../store/actions/userActions";
import cx from "classnames";
import styles from "./FavoriteButton.module.scss";
import message from "../../../../utils/message";

const FavoriteButton = ({ movieId, movieName, size }) => {
  const user = useSelector(({ user }) => user.user);
  const isLoggedIn = useSelector(({ user }) => user.loggedIn);
  const favoriteMovies = useSelector(({ user }) => user.favoriteMovies);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();

  const addFavoriteMovie = () => {
    dispatch(
      addFavorite({
        userId: user.id,
        movieId: movieId,
        token,
      })
    );

    message.success(`${movieName} u shtua me suksess`);
  };

  const removeFavoriteMovie = () => {
    dispatch(
      removeFavorite({
        userId: user.id,
        movieId: movieId,
        token,
      })
    );
    message.success(`${movieName} u hoq me suksess`);
  };

  useEffect(() => {
    if (isLoggedIn) {
      setToken(localStorage.getItem("token"));
    }
  }, [isLoggedIn]);

  return (
    <>
      {movieId && isLoggedIn ? (
        favoriteMovies.includes(movieId) ? (
          <button className={cx(styles.favoriteButton, styles[size])} title="Hiq nga filmat e preferuar" onClick={removeFavoriteMovie}>
            <RiHeart2Fill />
          </button>
        ) : (
          <button className={cx(styles.favoriteButton, styles[size])} title="Shto tek filmat e preferuar" onClick={addFavoriteMovie}>
            <RiHeart2Line />
          </button>
        )
      ) : null}
    </>
  );
};

export default FavoriteButton;
