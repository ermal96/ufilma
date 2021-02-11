import React from "react";
import { TopMovieCard } from "../../components";
import { useSelector } from "react-redux";

const TopMovie = () => {
  const movies = useSelector(({ movies }) => movies.movies);
  if (movies.length) {
    return <TopMovieCard movies={movies} />;
  } else {
    return "";
  }
};

export default TopMovie;
