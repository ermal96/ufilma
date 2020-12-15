import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  movies: moviesReducer,
  user: userReducer,
});
