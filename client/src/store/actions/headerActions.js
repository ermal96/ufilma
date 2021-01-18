import { types } from "../types";

export const setUserDropdown = (bool) => async (dispatch) => {
  dispatch({
    type: types.header.SET_USER_DROPDOWN,
    payload: bool,
  });
};

export const setSearch = (bool) => async (dispatch) => {
  dispatch({
    type: types.header.SET_SEARCH,
    payload: bool,
  });
};
