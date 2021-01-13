import { types } from "../actions/types";

const defaultState = {
  movies: {},
  movie: {},
  loaded: false,
};

export const moviesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    case types.GET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };

    case types.MOVIES_LOADED:
      return {
        ...state,
        loaded: action.payload,
      };

    case types.DETELE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((item) => item._id !== action.payload),
      };

    default:
      return state;
  }
};
