import React, { useEffect } from "react";

import { getCategories } from "../../store/actions/categoriesAction";
import { useDispatch } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return <>categories</>;
};

export default Categories;
