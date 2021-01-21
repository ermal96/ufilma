import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { moviesReducer } from "./moviesReducer";
import { categoriesReducer } from "./categoriesReducer";
import { imagesReducer } from "./imagesReducer";

export default combineReducers({
  user: userReducer,
  movies: moviesReducer,
  categories: categoriesReducer,
  images: imagesReducer,
});
