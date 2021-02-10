import express from "express";
import * as auth from "../controllers/authController.js";
import { verifyToken } from "../auth/verifyToken.js";
import { isAdmin } from "../auth/isAdmin.js";

const router = express.Router();

router.post("/register", auth.register);
router.post("/login", auth.login);
router.post("/login_admin", auth.loginAdmin);
router.get("/auto_login", verifyToken, auth.autoLogin);

export const authRoute = router;
