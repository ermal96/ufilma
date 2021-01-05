import express from "express";
import * as categories from "../controllers/categories.controller.js";
import { upload } from "../utils/upload.js";

const router = express.Router();

router.get("/", categories.getAll);
router.post("/", upload, categories.add);
router.delete("/:id", categories.removeById);
router.put("/:id", categories.updateById);

export const categoriesRoute = router;
