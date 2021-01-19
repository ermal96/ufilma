import express from "express";
import * as search from "../controllers/search.controller.js";
import { verifyToken } from "../auth/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, search.get);

export const searchRoute = router;
