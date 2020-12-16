import express from "express";
import * as movies from "../controllers/movies.controller.js";
// import { upload } from "../utils/upload.js";

const router = express.Router();

router.get("/", movies.getAll);
router.get("/:id", movies.getById);
router.post("/", movies.add);
router.put("/:id", movies.updateById);
router.delete("/:id", movies.removeById);

export const moviesRoute = router;
