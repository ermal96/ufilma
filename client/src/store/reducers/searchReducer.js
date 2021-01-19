import { types } from "../types";

const defaultState = {
  result: {},
};

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.search.GET_SEARCH_MOVIES:
      return {
        ...state,
        result: action.payload,
      };

    default:
      return state;
  }
};
