import React, { useEffect } from "react";
import { Card, Grid, Container } from "../../components";
import { PageHeader } from "../../components";
import { routes } from "../../routes";
import { Layout } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getUserFavoriteMovies } from "../../store/actions/moviesAction";
import styled from "styled-components";

const UFavoriteNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

const Favorites = () => {
  const favoriteMoviesId = useSelector(({ user }) => user.favoriteMovies);
  const favoriteMovies = useSelector(({ movies }) => movies.userFavoriteMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFavoriteMovies(favoriteMoviesId));
  }, [dispatch, favoriteMoviesId]);

  return (
    <Layout>
      <PageHeader
        title="Filmat e preferuar"
        imageUrl="https://images.unsplash.com/photo-1611820972303-a852ce20c2f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
        description="Këtu do te gjeni te gjithë Filmat tuaj te preferuar"
      />
      <Container>
        {favoriteMovies.length ? (
          <Grid>
            {favoriteMovies.map((movie) => (
              <Card
                ratio="2/3"
                backgroundImage={`url(${process.env.REACT_APP_SERVER}${movie.thumbnail})`}
                link={routes.movies + "/" + movie._id}
                key={movie._id}
                quality={movie.quality}
                title={movie.name}
                categories={movie.categories}
                id={movie._id}
              />
            ))}
          </Grid>
        ) : (
          <UFavoriteNotFound>
            <h1>Ju nuk kemi asnje film te preferuar</h1>

            <p>
              Ju mund te shtoni filma te pereferuar duke kilikuar ikonen me
              zemer
            </p>
          </UFavoriteNotFound>
        )}
      </Container>
    </Layout>
  );
};

export default Favorites;
