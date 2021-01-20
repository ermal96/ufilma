import express from "express";
import * as search from "../controllers/search.controller.js";
import { verifyToken } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/:query", search.get);

export const searchRoute = router;
