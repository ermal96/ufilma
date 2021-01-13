import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMovie } from "../../store/actions/moviesAction";

const Movie = ({ match }) => {
  const dispatch = useDispatch();
  const movie = useSelector(({ movies }) => movies.movie);
  useEffect(() => {
    dispatch(getMovie(match.params.id));
  }, [dispatch, match.params.id]);

  return <>movie page</>;
};

export default Movie;
