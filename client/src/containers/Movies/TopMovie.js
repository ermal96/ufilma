import React from "react";
import { TopMovieCard } from "../../components";
import { useSelector } from "react-redux";

const TopMovie = () => {
  const movie = useSelector(({ movies }) => movies.movies[0]);
  if (movie) {
    return <TopMovieCard key={movie._id} movie={movie} />;
  } else {
    return "";
  }
};

export default TopMovie;
