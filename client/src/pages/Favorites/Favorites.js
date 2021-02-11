import React, { useEffect } from "react";
import { Card, Grid, Container, Spinner, Fade } from "../../components";
import { PageHeader } from "../../components";
import { routes } from "../../routes";
import { Layout, Seo } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { getUserFavoriteMovies } from "../../store/actions/moviesAction";
import styles from "./Favorites.module.scss";
import MovieImg from "../../assets/movies.jpg";

const Favorites = () => {
  const favoriteMoviesId = useSelector(({ user }) => user.favoriteMovies);
  const favoriteMovies = useSelector(({ movies }) => movies.userFavoriteMovies);
  const isLoading = useSelector(({ app }) => app.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserFavoriteMovies(favoriteMoviesId));
  }, [dispatch, favoriteMoviesId]);

  return (
    <Layout>
      <Seo title="Filmat e preferuar" description="Këtu do te gjeni te gjithë Filmat tuaj te preferuar" />
      {isLoading ? (
        <Spinner />
      ) : (
        <Fade>
          <PageHeader title="Filmat e preferuar" imageUrl={MovieImg} description="Këtu do te gjeni te gjithë Filmat tuaj te preferuar" />
          <Container>
            {favoriteMovies.length ? (
              <Grid>
                {favoriteMovies.map((movie) => (
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
                ))}
              </Grid>
            ) : (
              <div className={styles.notFound}>
                <h1>Ju nuk kemi asnje film te preferuar</h1>

                <p>Ju mund te shtoni filma te pereferuar duke kilikuar ikonen me zemer</p>
              </div>
            )}
          </Container>
        </Fade>
      )}
    </Layout>
  );
};

export default Favorites;
