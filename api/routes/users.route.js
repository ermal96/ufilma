import express from "express";
import * as users from "../controllers/users.controller.js";
import { verifyToken } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, users.getAll);
router.get("/:id", verifyToken, users.getById);

export const usersRoute = router;
