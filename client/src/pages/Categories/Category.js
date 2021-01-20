import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/actions/categoriesAction";
import { Layout } from "../../components";

const Category = ({ match }) => {
  const dispatch = useDispatch();
  const category = useSelector(({ categories }) => categories.category);
  useEffect(() => {
    dispatch(getCategory(match.params.id));
  }, [dispatch, match.params.id]);

  return <Layout>{category && <p>{category.name}</p>}</Layout>;
};

export default Category;
