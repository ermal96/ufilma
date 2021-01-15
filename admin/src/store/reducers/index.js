import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { moviesReducer } from "./moviesReducer";
import { categoriesReducer } from "./categoriesReducer";

export default combineReducers({
  user: userReducer,
  movies: moviesReducer,
  categories: categoriesReducer,
});
