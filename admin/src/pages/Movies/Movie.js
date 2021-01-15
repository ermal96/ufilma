import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ULayout from "../../containers/Layout";
import { getMovie } from "../../store/actions/moviesAction";

const Movie = ({ match }) => {
  const dispatch = useDispatch();
  const movie = useSelector(({ movies }) => movies.movie);
  useEffect(() => {
    dispatch(getMovie(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <ULayout activeRoute={match.path} activePage="Movie">
      movie page
    </ULayout>
  );
};

export default Movie;
