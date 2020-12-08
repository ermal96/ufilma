import { types } from "../actions/types";

const inittialState = {
  data: [],
};

export const moviesReducer = (state = inittialState, action) => {
  switch (action.type) {
    case types.GET_MOVIES:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
