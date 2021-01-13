import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";

import { routes } from "../../routes";
const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <p>movies poge</p>
    </>
  );
};

export default Movies;
