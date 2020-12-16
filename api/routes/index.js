// import routes
import { moviesRoute } from "./movies.route.js";
import { categoriesRoute } from "./categories.route.js";
import { authRoute } from "./auth.route.js";
import { verifyToken } from "../auth/verifyToken.js";

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

  // users
  app.use("/api/auth", authRoute);
};
