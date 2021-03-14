import express from "express";
import * as movies from "../controllers/moviesController.js";
import { verifyToken } from "../auth/verifyToken.js";
import { isAdmin } from "../auth/isAdmin.js";

const router = express.Router();

router.get("/", movies.get);
router.get("/favorites", movies.getFavorites);
router.get("/:id", movies.getById);
router.get("/category/:id", movies.getMovesByCategory);
router.post("/", verifyToken, isAdmin, movies.add);
router.put("/:id", verifyToken, isAdmin, movies.updateById);
router.delete("/:id", verifyToken, isAdmin, movies.removeById);

export const moviesRoute = router;
