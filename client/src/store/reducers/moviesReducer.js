import { types } from "../types";

const defaultState = {
  movies: {},
  movie: {},
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

    case types.movies.MOVIES_LOADED:
      return {
        ...state,
        loaded: action.payload,
      };

    default:
      return state;
  }
};
