import { types } from "../types";

const defaultState = {
  movies: {},
};

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.search.GET_SEARCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    default:
      return state;
  }
};
