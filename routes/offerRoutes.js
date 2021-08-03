import express from "express";
import {
  getOfferById,
  getOffer,
  getOffers,
  CreateOffer,
  DeleteOffer,
  UpdateOffer,
} from "../controllers/offerController.js";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

router.route("/").get(protect, getOffer);
router
  .route("/:id")
  .get(getOfferById)
  .get(getOffers)
  .delete(protect, DeleteOffer)
  .put(protect, UpdateOffer);
router.route("/create").post(protect, CreateOffer);

export default router;
