// imports
import express from "express";

// start express app
const app = express();

// import configs
import {config} from  "./config/config.js";
import {mongoConnect} from  "./config/mongodb.js";

// import routes
import { moviesRoute } from "./routes/movies.route.js";
import { categoriesRoute } from "./routes/categories.route.js";

// config server
config(app);

// init mongodb
mongoConnect();

// default route
app.get('/api', (_, res) => {
    res.send({
        message: "Hello From Api"
    })
})

// movies routes
app.use("/api/movies", moviesRoute);

// categories routes
app.use("/api/categories", categoriesRoute);
