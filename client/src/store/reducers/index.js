import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { moviesReducer } from "./moviesReducer";
import { categoriesReducer } from "./categoriesReducer";
import { headerReducer } from "./headerReducer";
import { searchReducer } from "./searchReducer";
import { appReducer } from "./appReducer";

export default combineReducers({
  app: appReducer,
  user: userReducer,
  movies: moviesReducer,
  categories: categoriesReducer,
  header: headerReducer,
  search: searchReducer,
});
