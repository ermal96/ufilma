import { types } from "../types";

const defaultState = {
  categories: [],
  category: {},
  loaded: false,
};

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.categories.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case types.categories.GET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};
