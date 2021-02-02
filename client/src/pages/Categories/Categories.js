import React, { useEffect } from "react";
import { getCategories } from "../../store/actions/categoriesAction";
import { useDispatch, useSelector } from "react-redux";
import { PageHeader, Spinner } from "../../components";
import { Layout } from "../../components";
import { Card, Container, Grid } from "../../components";
import { routes } from "../../routes";

const Categories = () => {
  const categories = useSelector(({ categories }) => categories.categories);
  const dispatch = useDispatch();
  const isLoading = useSelector(({ app }) => app.loading);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <Layout>
        <PageHeader
          title="Kategorite"
          imageUrl="https://images.unsplash.com/photo-1599967098496-5eb5e008d82c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
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
      </Layout>
    );
  }
};

export default Categories;
