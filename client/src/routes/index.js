export const routes = {
  dashboard: "/",
  login: "/login",
  movies: "/movies",
  movie: "/movie:id",
  categories: "/categories",
  category: "/category:id",
};

export { default as PrivateRoute } from "./PrivateRoute";
export { default as AuthRoute } from "./AuthRoute";
