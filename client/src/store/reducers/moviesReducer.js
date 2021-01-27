import { types } from "../types";

const defaultState = {
  movies: {},
  movie: {},
  moviesInCategory: {},
  loaded: false,
};

export const moviesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.movies.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    case types.movies.GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };

    case types.movies.GET_MOVIES_IN_CATEGORY:
      return {
        ...state,
        moviesInCategory: action.payload,
      };

    case types.movies.MOVIES_LOADING:
      return {
        ...state,
        loaded: action.payload,
      };

    case types.movies.RESET_MOVIES:
      return {
        ...state,
        movies: {},
        movie: {},
        moviesInCategory: {},
      };

    default:
      return state;
  }
};
