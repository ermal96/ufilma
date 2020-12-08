const express = require("express");
const router = express.Router();
const movies = require("../controllers/movies.controller");

router.get("/", movies.getAllMovies);
router.get("/:slug", movies.getMovie);
router.post("/", movies.add);
router.delete("/:slug", movies.delete);
router.put("/:slug", movies.update);

module.exports = router;
