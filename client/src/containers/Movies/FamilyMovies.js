import React, { useState, useEffect } from "react";
import { Card, Container, Title, Grid } from "../../components";
import { routes } from "../../routes";

const FamilyMovies = ({ movies }) => {
  const [familyMovies, setfamilyMovies] = useState("");

  useEffect(() => {
    setfamilyMovies(
      movies.filter((movie) =>
        movie.categories.map((category) => category.name === "Family")
      )
    );
  }, [movies]);

  return (
    <Container>
      <Title>Family</Title>

      <Grid>
        {familyMovies.length &&
          familyMovies.map((movie) => (
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

export default FamilyMovies;
