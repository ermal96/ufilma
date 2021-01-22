import express from "express";
import * as categories from "../controllers/categoriesController.js";
import { upload } from "../utils/upload.js";
import { verifyToken } from "../auth/verifyToken.js";
import { isAdmin } from "../auth/isAdmin.js";

const router = express.Router();

router.get("/", categories.getAll);
router.get("/:id", categories.getById);
router.post("/", verifyToken, isAdmin, categories.add);
router.delete("/:id", verifyToken, isAdmin, categories.removeById);
router.put("/:id", verifyToken, isAdmin, categories.updateById);

export const categoriesRoute = router;
