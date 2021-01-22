// import routes
import { moviesRoute } from "./moviesRoute.js";
import { categoriesRoute } from "./categoriesRoute.js";
import { authRoute } from "./authRoute.js";
import { usersRoute } from "./usersRoute.js";
import { searchRoute } from "./searchRoute.js";
import { imagesRoute } from "./imagesRoute.js";

export const apiRoutes = (app) => {
  // default route
  app.get("/api", (_, res) => {
    res.send({
      message: "Hello From Ufilma Api",
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

  // images
  app.use("/api/images", imagesRoute);
};
