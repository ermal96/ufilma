import { types } from "../actions/types";

const defaultState = {
  images: [],
  loaded: false,
};

export const imagesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };

    case types.IMAGES_LOADED:
      return {
        ...state,
        loaded: action.payload,
      };


    default:
      return state;
  }
};