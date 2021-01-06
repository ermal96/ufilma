import { types } from "../actions/types";

const defaultState = {
  categories: {},
  category: {},
  loaded: false,
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

    case types.CATEGORIES_LOADED:
      return {
        ...state,
        loaded: action.payload,
      };

    default:
      return state;
  }
};
