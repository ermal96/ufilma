import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/actions/categoriesAction";

const Category = ({ match }) => {
  const dispatch = useDispatch();
  const category = useSelector(({ categories }) => categories.category);
  useEffect(() => {
    dispatch(getCategory(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      {console.log(category)}

      {category && <p>{category.title}</p>}
    </>
  );
};

export default Category;
