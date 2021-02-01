import React from "react";
import { TopMovieCard } from "../../components";

const TopMovie = ({ movies }) => {
  return <TopMovieCard key={movies[0]._id} movie={movies[0]} />;
};

export default TopMovie;
