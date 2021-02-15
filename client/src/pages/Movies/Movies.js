import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { Card, Grid, Container, Spinner, Seo, Fade } from "../../components";
import { PageHeader } from "../../components";
import { routes } from "../../routes";
import { Layout } from "../../components";
import MovieImg from "../../assets/movies.svg";
import { isEmptyObject } from "../../utils";

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.movies);
  const isLoading = useSelector(({ app }) => app.loading);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <Layout>
      <Seo title="Filma" description="Shiko filmat e fundit ne nje kualitet tjetër" />
      {isLoading ? (
        <Spinner />
      ) : (
        <Fade>
          <PageHeader title="Filmat" svgUrl={MovieImg} description="Në këtë faqe do te gjeni te gjithë filmat ne nje tjter kualitet " />
          <Container>
            <Grid>
              {!isEmptyObject(movies)
                ? movies.docs.map((movie) => (
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
          </Container>{" "}
        </Fade>
      )}
    </Layout>
  );
};

export default Movies;
