import React, { useState, useEffect } from "react";
import { Card, Container, Title, Grid } from "../../components";
import { routes } from "../../routes";

const KomediMovies = ({ movies }) => {
  const [komediMovies, setKomediMovies] = useState("");

  useEffect(() => {
    setKomediMovies(
      movies.filter((movie) =>
        movie.categories.map((category) => category.name === "Komedi")
      )
    );
  }, [movies]);

  return (
    <Container>
      <Title>Komedi</Title>

      <Grid>
        {komediMovies.length &&
          komediMovies.map((movie) => (
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

export default KomediMovies;
