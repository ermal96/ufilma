import { types } from "../types";

const defaultState = {
  loading: true,
};

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.app.LOAD_APP:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
