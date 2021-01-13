import React from "react";

import ULayout from "../../containers/Layout";

const Category = ({ match }) => {
  return (
    <ULayout activeRoute={match.path} activePage="Add Movie">
      add movie
    </ULayout>
  );
};

export default Category;
