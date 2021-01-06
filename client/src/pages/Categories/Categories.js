import React, { useEffect } from "react";
import CategoryGrid from "../../containers/Categories/CategoryGrid";
import { getCategories } from "../../store/actions/categoriesAction";
import { useDispatch } from "react-redux";

const Categories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return <CategoryGrid />;
};

export default Categories;
