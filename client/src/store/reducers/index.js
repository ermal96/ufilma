import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { moviesReducer } from "./moviesReducer";
import { categoriesReducer } from "./categoriesReducer";
import { headerReducer } from "./headerReducer";

export default combineReducers({
  user: userReducer,
  movies: moviesReducer,
  categories: categoriesReducer,
  header: headerReducer,
});
