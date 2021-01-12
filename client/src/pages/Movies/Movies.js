import React from "react";
import { PageHeader } from "../../components";
import { routes } from "../../routes";
const Movies = () => {
  return (
    <>
      <PageHeader
        link={routes.movies}
        title="Movies"
        imageUrl="https://images.unsplash.com/photo-1599967104345-548003f5a626?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1952&q=80"
        description="This is the Movies page, here you can filter all the movies you want "
      />
    </>
  );
};

export default Movies;
