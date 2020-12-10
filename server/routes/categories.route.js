import express from "express";
import * as categories from "../controllers/categories.controller.js";

const router = express.Router();

router.get("/", categories.get);
router.post("/", categories.add);
router.delete("/:slug", categories.remove);
router.put("/:slug", categories.update);

export const categoriesRoute =  router;
