import { types } from "../actions/types";
const token = localStorage.getItem("token");

const inittialState = {
  token,
};

export const authReducer = (state = inittialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
