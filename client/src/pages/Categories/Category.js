import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Card, Grid, Container, PageHeader, Spinner, Seo } from "../../components";
import { getMoviesInCategory, resetMovies } from "../../store/actions/moviesAction";
import { getCategory } from "../../store/actions/categoriesAction";
import { routes } from "../../routes";

const Category = ({ match }) => {
  const dispatch = useDispatch();
  const movies = useSelector(({ movies }) => movies.moviesInCategory);
  const category = useSelector(({ categories }) => categories.category);
  const isLoading = useSelector(({ app }) => app.loading);

  useEffect(() => {
    dispatch(resetMovies());
    dispatch(getCategory(match.params.id));
    dispatch(getMoviesInCategory(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <Layout>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Seo title={category.name} description={category.description} />
          <PageHeader
            title={category.name}
            imageUrl="https://s.studiobinder.com/wp-content/uploads/2020/05/Best-Action-Movies-of-All-Time-Featured-.jpg"
            description={`Këtu do te gjeni te gjithë filmat e kategorisë ${category.name} shikim të këndshëm!`}
          />
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
        </>
      )}
    </Layout>
  );
};

export default Category;
