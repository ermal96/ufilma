import React, { useEffect } from "react";
import CategoryGrid from "../../containers/Categories/CategoryGrid";
import { getCategories } from "../../store/actions/categoriesAction";
import { useDispatch } from "react-redux";
import { PageHeader } from "../../components";
import { routes } from "../../routes";
import { Layout } from "../../components";
const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <Layout>
      <PageHeader
        link={routes.categories}
        title="Kategorite"
        imageUrl="https://images.unsplash.com/photo-1599967098496-5eb5e008d82c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
        description="Ketu do te gjeni te gjithe categorite, me te cilat mund te filtroni filmat qe deshironi."
      />
      <CategoryGrid />
    </Layout>
  );
};

export default Categories;
