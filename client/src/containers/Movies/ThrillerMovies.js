import React, { useState, useEffect } from "react";
import { Card, Container, Title, Grid } from "../../components";
import { routes } from "../../routes";

const ThrillerMovies = ({ movies }) => {
  const [thrillerMovies, setThrillerMovies] = useState("");

  useEffect(() => {
    setThrillerMovies(
      movies.filter((movie) =>
        movie.categories.map((category) => category.name === "Thriller")
      )
    );
  }, [movies]);

  return (
    <Container>
      <Title>Thriller</Title>

      <Grid>
        {thrillerMovies.length &&
          thrillerMovies.map((movie) => (
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

export default ThrillerMovies;
