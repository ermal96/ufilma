import express from "express";
import  * as movies from "../controllers/movies.controller.js";

const router = express.Router();

router.get("/", movies.getAllMovies);
router.get("/:id", movies.getMovie);
router.post("/", movies.add);
router.delete("/:id", movies.remove);
router.put("/:id", movies.update);

export const moviesRoute =  router;
