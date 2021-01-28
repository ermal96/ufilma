import express from "express";
import * as users from "../controllers/usersController.js";
import { verifyToken } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, users.getAll);
router.get("/:id", verifyToken, users.getById);
router.put("/add-favorite", verifyToken, users.addFavorite);
router.put("/remove-favorite", verifyToken, users.removeFavorite);

export const usersRoute = router;
