import express from "express";
import * as categories from "../controllers/categories.controller.js";
import { upload } from "../utils/upload.js";
import { verifyToken } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/", verifyToken, categories.getAll);
router.get("/:id", verifyToken, categories.getById);
router.post("/", verifyToken, upload, categories.add);
router.delete("/:id", verifyToken, categories.removeById);
router.put("/:id", verifyToken, upload, categories.updateById);

export const categoriesRoute = router;
