import React from "react";
import { TopMovieCard } from "../../components";
import { useSelector } from "react-redux";
import { isEmptyObject } from "../../utils";

const TopMovie = () => {
  const movies = useSelector(({ movies }) => movies.movies);
  if (!isEmptyObject(movies)) {
    return <TopMovieCard movies={movies.docs} />;
  } else {
    return "";
  }
};

export default TopMovie;
