// imports
import express from "express";
import path from 'path';

// start express app
const app = express();

// import configs
import { config } from  "./config/config.js";
import { mongoConnect } from  "./config/mongodb.js";
import { __dirname } from "./config/config.js";

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

// static folder
app.use('/uploads', express.static('uploads'));

// movies routes
app.use("/api/movies", moviesRoute);

// categories routes
app.use("/api/categories", categoriesRoute);

