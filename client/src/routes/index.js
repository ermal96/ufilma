export const routes = {
  home: "/",
  admin: "/admin",
  adminLogin: "/admin/login",
  adminMovies: "/admin/movies",
  adminCategories: "/admin/categories",
  movies: "/movies",
  movie: "/movie:slug",
  categories: "/categories",
  category: "/category:slug",
};

export { default as PrivateRoute } from "./PrivateRoute";
export { default as AuthRoute } from "./AuthRoute";
