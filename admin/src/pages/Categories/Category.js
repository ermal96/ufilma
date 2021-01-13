import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/actions/categoriesAction";
import ULayout from "../../containers/Layout";

const Category = ({ match }) => {
  const dispatch = useDispatch();
  const category = useSelector(({ categories }) => categories.category);
  useEffect(() => {
    dispatch(getCategory(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <ULayout activeRoute={match.path} activePage="Category">
      category
    </ULayout>
  );
};

export default Category;
