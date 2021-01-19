import { types } from "../types";

export const setUserDropdown = (bool) => async (dispatch) => {
  dispatch({
    type: types.header.SET_USER_DROPDOWN,
    payload: bool,
  });
  dispatch({
    type: types.header.SET_MENU_MOBILE,
    payload: false,
  });
  dispatch({
    type: types.header.SET_SEARCH,
    payload: false,
  });
};

export const setSearch = (bool) => async (dispatch) => {
  dispatch({
    type: types.header.SET_SEARCH,
    payload: bool,
  });
  dispatch({
    type: types.header.SET_MENU_MOBILE,
    payload: false,
  });
  dispatch({
    type: types.header.SET_USER_DROPDOWN,
    payload: false,
  });
};

export const setMenuMobile = (bool) => async (dispatch) => {
  dispatch({
    type: types.header.SET_MENU_MOBILE,
    payload: bool,
  });
  dispatch({
    type: types.header.SET_SEARCH,
    payload: false,
  });
  dispatch({
    type: types.header.SET_USER_DROPDOWN,
    payload: false,
  });
};
