import express from "express";
import  * as movies from "../controllers/movies.controller.js";

const router = express.Router();

router.get("/", movies.getAllMovies);
router.get("/:slug", movies.getMovie);
router.post("/", movies.add);
router.delete("/:slug", movies.remove);
router.put("/:slug", movies.update);

export const moviesRoute =  router;
