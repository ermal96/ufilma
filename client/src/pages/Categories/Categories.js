import React, { useEffect } from "react";
import { getCategories } from "../../store/actions/categoriesAction";
import { useDispatch, useSelector } from "react-redux";
import { Fade, PageHeader, Spinner } from "../../components";
import { Layout, Seo } from "../../components";
import { Card, Container, Grid } from "../../components";
import { routes } from "../../routes";
import MovieImg from "../../assets/movies.jpg";

const Categories = () => {
  const categories = useSelector(({ categories }) => categories.categories);
  const dispatch = useDispatch();
  const isLoading = useSelector(({ app }) => app.loading);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Layout>
      <Seo title="Kategoritë" description="Këtu do te gjeni te gjithë Kategoritë me të cilat mund te filtroni filmat qe dëshironi." />
      {isLoading ? (
        <Spinner />
      ) : (
        <Fade>
          <PageHeader
            title="Kategoritë"
            imageUrl={MovieImg}
            description="Këtu do te gjeni te gjithë Kategoritë me të cilat mund te filtroni filmat qe dëshironi."
          />
          <Container>
            <Grid>
              {categories.length
                ? categories.map((category) => (
                    <Card
                      variant="square"
                      backgroundImage={`url(${process.env.REACT_APP_SERVER}${category.thumbnail})`}
                      link={routes.categories + "/" + category._id}
                      key={category._id}
                      title={category.name}
                      length={category.movies.length}
                    />
                  ))
                : null}
            </Grid>
          </Container>
        </Fade>
      )}
    </Layout>
  );
};

export default Categories;
