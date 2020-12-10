import express from "express";
import * as categories from "../controllers/categories.controller.js";

const router = express.Router();

router.get("/", categories.get);
router.post("/", categories.add);
router.delete("/:id", categories.remove);
router.put("/:id", categories.update);

export const categoriesRoute =  router;
