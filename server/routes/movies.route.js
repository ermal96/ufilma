import express from "express";
import  * as movies from "../controllers/movies.controller.js";
import { upload } from '../utils/upload.js';

const router = express.Router();

router.get("/", movies.getAll);
router.get("/:slug", movies.get);
router.post("/", upload.single('imageUrl'), movies.add);
router.delete("/:slug", movies.remove);
router.put("/:slug", movies.update);

export const moviesRoute =  router;
