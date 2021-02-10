import { types } from "../actions/types";

const defaultState = {
  categories: [],
  category: {},
  loaded: false,
  error: false,
};

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case types.GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case types.CATEGORY_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case types.CATEGORIES_LOADED:
      return {
        ...state,
        loaded: action.payload,
      };

    case types.DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter((item) => item._id !== action.payload),
      };

    default:
      return state;
  }
};
