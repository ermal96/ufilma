import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { authReducer } from "./authReducer";

export default combineReducers({
  movies: moviesReducer,
  auth: authReducer,
});
