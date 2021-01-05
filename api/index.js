// imports
import express from "express";

// import configs
import { config } from "./config/config.js";
import { apiRoutes } from "./routes/index.js";

// start express app
const app = express();
app.use("/uploads", express.static("uploads"));

// config server
config(app);

// init routes
apiRoutes(app);
