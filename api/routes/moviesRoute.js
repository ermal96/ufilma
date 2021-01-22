import express from "express";
import * as movies from "../controllers/moviesController.js";
import { upload } from "../utils/upload.js";
import { verifyToken } from "../auth/verifyToken.js";
import { isAdmin } from "../auth/isAdmin.js";

const router = express.Router();

router.get("/", movies.getAll);
router.get("/:id", movies.getById);
router.post("/", verifyToken, isAdmin, upload, movies.add);
router.put("/:id", verifyToken, isAdmin, upload, movies.updateById);
router.delete("/:id", verifyToken, isAdmin, movies.removeById);

export const moviesRoute = router;
