import React, { useState, useEffect } from "react";
import { Card, Container, Title, Grid } from "../../components";
import { routes } from "../../routes";

const FamilyMovies = ({ movies }) => {
  const [familyMovies, setfamilyMovies] = useState("");

  useEffect(() => {
    setfamilyMovies(
      movies.filter((movie) => movie.categories[0].name === "Family")
    );
  }, [movies]);

  return (
    <Container>
      {familyMovies.length ? (
        <>
          <Title>Family</Title>

          <Grid>
            {familyMovies.slice(0, 5).map((movie) => (
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
        </>
      ) : null}
    </Container>
  );
};

export default FamilyMovies;
