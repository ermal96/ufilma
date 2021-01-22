import express from "express";
import * as search from "../controllers/searchController.js";

const router = express.Router();

router.get("/:query", search.get);

export const searchRoute = router;
