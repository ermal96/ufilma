import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { Card, Container, Title } from "../../components";
import styled from "styled-components";
import { routes } from "../../routes";

const URecentMovies = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 3rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
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
      <URecentMovies>
        {recentMovies.length
          ? recentMovies.map((movie) => (
              <Card
                ratio="2/3"
                backgroundImage={`url(${process.env.REACT_APP_SERVER}${movie.imageUrl})`}
                link={routes.movies + "/" + movie._id}
                key={movie._id}
                quality={movie.quality}
                title={movie.name}
                categories={movie.categories}
              />
            ))
          : null}
      </URecentMovies>
    </Container>
  );
};

export default RecentMovies;
