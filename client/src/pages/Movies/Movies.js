import React, { useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../store/actions/moviesAction";
import { Grid, Container, Spinner, Seo, Fade } from "../../components";
import { PageHeader } from "../../components";
import { routes } from "../../routes";
import { Layout } from "../../components";
import MovieImg from "../../assets/movies.svg";
import { isEmptyObject } from "../../utils";

const Card = React.lazy(() => import("../../components/Cards/Card/Card"));

const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.movies);
  const isLoading = useSelector(({ app }) => app.loading);

  useEffect(() => {
    dispatch(getMovies({ limit: 100 }));
  }, [dispatch]);

  return (
    <Layout>
      <Seo title="Filma" description="Shiko filmat e fundit ne nje kualitet tjetër" />
      {isLoading ? (
        <Spinner />
      ) : (
        <Fade>
          <PageHeader
            title="Filmat"
            svgUrl={MovieImg}
            description="Në këtë faqe do te gjeni te gjithë filmat ne nje tjter kualitet "
          />
          <Container>
            <Grid>
              {!isEmptyObject(movies)
                ? movies.docs.map((movie) => (
                    <Suspense key={movie._id} fallback="">
                      <Card
                        backgroundImage={`${process.env.REACT_APP_SERVER}${movie.thumbnail}`}
                        link={routes.movies + "/" + movie._id}
                        quality={movie.quality}
                        title={movie.name}
                        categories={movie.categories}
                        id={movie._id}
                      />
                    </Suspense>
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
