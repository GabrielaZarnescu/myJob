import express from "express";
import {
  authUser,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/register").post(registerUser);   //de exemplu register vezi ca are "/register" Cand scrii in front end, o sa iei "/users/register"
router.post("/login", authUser);  //"users/login"
router.route("/profile").post(protect, updateUserProfile);  //"users/profile"

export default router;