import { types } from "../actions/types";

const defaultState = {
  recentMovies: {},
  movie: {},
  loaded: false,
};

export const moviesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        recentMovies: action.payload,
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

    default:
      return state;
  }
};
