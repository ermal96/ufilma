import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { moviesReducer } from "./moviesReducer";

export default combineReducers({
  user: userReducer,
  movies: moviesReducer,
});
