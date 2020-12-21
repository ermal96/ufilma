import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { MovieCard } from "../../components";
import styled from "styled-components";

const URecentMovies = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-top: 30px;
`;

const RecentMovies = () => {
  const dispatch = useDispatch();
  const recentMovies = useSelector(({ movies }) => movies.recentMovies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div>
      <h1>Recent Movies</h1>
      <URecentMovies>
        {recentMovies.length
          ? recentMovies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))
          : null}
      </URecentMovies>
    </div>
  );
};

export default RecentMovies;
