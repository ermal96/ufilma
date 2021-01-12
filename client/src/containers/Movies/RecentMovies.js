import React from "react";
import { Card, Container, Title, Grid } from "../../components";
import { routes } from "../../routes";

const RecentMovies = ({ movies }) => {
  return (
    <Container>
      <Title>Recent</Title>
      <Grid>
        {movies.slice(0, 5).map((movie) => (
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
  );
};

export default RecentMovies;
