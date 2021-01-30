import express from "express";
import * as users from "../controllers/usersController.js";
import { verifyToken } from "../auth/verifyToken.js";
import { isAdmin } from "../auth/isAdmin.js";
const router = express.Router();

router.get("/", verifyToken, isAdmin, users.getAll);
router.get("/:id", verifyToken, users.getById);
router.put("/add-favorite", verifyToken, users.addFavorite);
router.put("/remove-favorite", verifyToken, users.removeFavorite);
router.post("/add-watching", verifyToken, users.addWatching);
router.post("/get-watching", verifyToken, users.getWatching);

export const usersRoute = router;
