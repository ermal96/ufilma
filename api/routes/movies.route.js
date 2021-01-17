import express from "express";
import * as movies from "../controllers/movies.controller.js";
import { upload } from "../utils/upload.js";
import { verifyToken } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, movies.getAll);
router.get("/:id", verifyToken, movies.getById);
router.post("/", verifyToken, upload, movies.add);
router.put("/:id", verifyToken, upload, movies.updateById);
router.delete("/:id", verifyToken, movies.removeById);

export const moviesRoute = router;
