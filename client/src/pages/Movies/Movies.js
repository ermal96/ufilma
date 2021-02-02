import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { Card, Grid, Container, Spinner } from "../../components";
import { PageHeader } from "../../components";
import { routes } from "../../routes";
import { Layout } from "../../components";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.movies);
  const isLoading = useSelector(({ app }) => app.loading);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <Layout>
        <PageHeader
          title="Filmat"
          imageUrl="https://images.unsplash.com/photo-1599967104345-548003f5a626?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1952&q=80"
          description="Këtu do te gjeni te gjithë filmat ne nje tjter kualitet mundesuar nga ufilma.com "
        />

        <Container>
          <Grid>
            {movies.length
              ? movies.map((movie) => (
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
                ))
              : null}
          </Grid>
        </Container>
      </Layout>
    );
  }
};

export default Movies;
