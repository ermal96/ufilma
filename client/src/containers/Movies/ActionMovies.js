import React, { useState, useEffect } from "react";
import { Card, Container, Title, Grid } from "../../components";
import { routes } from "../../routes";

const ActionMovies = ({ movies }) => {
  const [actionMovies, setActionMovies] = useState("");

  useEffect(() => {
    setActionMovies(
      movies.filter((movie) =>
        movie.categories.map((category) => category.name === "Action")
      )
    );
  }, [movies]);

  return (
    <Container>
      <Title>Action</Title>

      <Grid>
        {actionMovies.length &&
          actionMovies.map((movie) => (
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

export default ActionMovies;
