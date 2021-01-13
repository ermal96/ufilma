import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.movies);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return movies.length ? <p>movies home</p> : <p>loading</p>;
};

export default Home;
