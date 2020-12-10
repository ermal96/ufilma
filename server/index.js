// imports
const express = require("express");
const app = express();
const config = require("./config/config");
const mongodb = require("./config/mongodb");

// import routes
const moviesRoute = require("./routes/movies.route");
const categoriesRoute = require("./routes/categories.route");

// config server
config(app);

// init mongodb
mongodb();

// default route
app.get('/api', (req, res) => {
    res.send({
        message: "Hello From Api"
    })
})

// movies routes
app.use("/api/movies", moviesRoute);

// categories routes
app.use("/api/categories", categoriesRoute);
