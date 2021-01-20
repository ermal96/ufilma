import express from "express";
import * as auth from "../controllers/auth.controller.js";
import { verifyToken } from "../auth/verifyToken.js";

const router = express.Router();

router.post("/register", auth.register);
router.post("/login", auth.login);
router.get("/auto_login", verifyToken, auth.autoLogin);

export const authRoute = router;
