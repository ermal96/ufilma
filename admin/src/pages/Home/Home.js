import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import ULayout from "../../containers/Layout";

const Home = ({ match }) => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <ULayout activeRoute={match.path} activePage="Home">
      home
    </ULayout>
  );
};

export default Home;
