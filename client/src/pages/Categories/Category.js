import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Card, Grid, Container } from "../../components";
import {
  getMoviesInCategory,
  resetMovies,
} from "../../store/actions/moviesAction";
import { routes } from "../../routes";

const Category = ({ match }) => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.moviesInCategory);
  useEffect(() => {
    dispatch(resetMovies());
    dispatch(getMoviesInCategory(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <Layout>
      <Container>
        <Grid>
          {movies.length
            ? movies.map((movie) => (
                <Card
                  ratio="2/3"
                  backgroundImage={`url(${process.env.REACT_APP_SERVER}${movie.thumbnail})`}
                  link={routes.movies + "/" + movie._id}
                  key={movie._id}
                  quality={movie.quality}
                  title={movie.name}
                  categories={movie.categories}
                />
              ))
            : null}
        </Grid>
      </Container>
    </Layout>
  );
};

export default Category;
