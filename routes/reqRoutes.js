import express from "express";
import {
  getRequestById,
  getRequests,
  CreateRequest,
  DeleteRequest,
  createCommentReq,
} from "../controllers/reqController.js";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(getRequests);
router.route("/:id")
  .get(getRequestById)
  .delete(protect, DeleteRequest)
  .put(protect, createCommentReq);
router.route("/create").post(CreateRequest);

export default router;