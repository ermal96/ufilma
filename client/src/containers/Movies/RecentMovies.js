import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { MovieCard, Container, Title } from "../../components";
import styled from "styled-components";

const URecentMovies = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 540px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RecentMovies = () => {
  const dispatch = useDispatch();
  const recentMovies = useSelector(({ movies }) => movies.recentMovies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <Container>
      <Title>Recent Movies</Title>
      <URecentMovies>
        {recentMovies.length
          ? recentMovies.map((movie) => (
              <MovieCard key={movie._id} movie={movie} />
            ))
          : null}
      </URecentMovies>
    </Container>
  );
};

export default RecentMovies;
