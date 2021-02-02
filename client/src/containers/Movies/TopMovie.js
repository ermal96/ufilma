import React from "react";
import { TopMovieCard } from "../../components";

const TopMovie = ({ movies }) => {
  if (movies.length) {
    return <TopMovieCard key={movies[0]._id} movie={movies[0]} />;
  } else {
    return "";
  }
};

export default TopMovie;
