import { types } from "../types";

// action creators
export const setAppLoading = (payload) => ({
  type: types.app.LOAD_APP,
  payload,
});
