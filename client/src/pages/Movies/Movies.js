import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { Card, Grid, Container } from "../../components";
import { PageHeader } from "../../components";
import { routes } from "../../routes";
const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.movies);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <>
      <PageHeader
        link={routes.movies}
        title="Movies"
        imageUrl="https://images.unsplash.com/photo-1599967104345-548003f5a626?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1952&q=80"
        description="This is the Movies page, here you can filter all the movies you want "
      />

      <Container>
        <Grid>
          {movies.map((movie) => (
            <Card
              ratio="2/3"
              backgroundImage={`url(${process.env.REACT_APP_SERVER}${movie.imageUrl})`}
              link={routes.movies + "/" + movie._id}
              key={movie._id}
              quality={movie.quality}
              title={movie.name}
              categories={movie.categories}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Movies;
