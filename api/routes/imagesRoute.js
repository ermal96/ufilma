import express from "express";
import * as images from "../controllers/imagesController.js";
import { verifyToken } from "../auth/verifyToken.js";
import { isAdmin } from "../auth/isAdmin.js";

const router = express.Router();

router.get("/", verifyToken, isAdmin, images.getAll);

export const imagesRoute = router;
