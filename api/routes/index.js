// import routes
import { moviesRoute } from "./movies.route.js";
import { categoriesRoute } from "./categories.route.js";
import { authRoute } from "./auth.route.js";
import { verifyToken } from "../auth/verifyToken.js";
import { usersRoute } from "./users.route.js";
import { searchRoute } from "./search.route.js";

export const apiRoutes = (app) => {
  // default route
  app.get("/api", verifyToken, (_, res) => {
    res.send({
      message: "Hello From Api",
    });
  });

  // movies routes
  app.use("/api/movies", moviesRoute);

  // categories routes
  app.use("/api/categories", categoriesRoute);

  // auth
  app.use("/api/auth", authRoute);

  // users
  app.use("/api/users", usersRoute);

  // search
  app.use("/api/search", searchRoute);
};
