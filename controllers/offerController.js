import Offer from "../models/offerModel.js";
import asyncHandler from "express-async-handler";

// @desc    Get logged in user offers
// @route   GET /api/offers
// @access  Private

const getOffer = asyncHandler(async (req, res) => {
  const offer = await Offer.find({ user: req.user._id });
  res.json(offer);
});

// @desc    Fetch all offers
// @route   GET /api/offers
// @access  Public

const getOffers = asyncHandler(async (req, res) => {
  const offers = await Offer.find()
    .sort({date: -1})
   res.json(offers);
});
//@description     Fetch single offer
//@route           POST /api/offer/:id
//@access          Public

const getOfferById = asyncHandler(async (req, res) => {
  const offer = await Offer.findById(req.params.id);

  if (offer) {
    res.json(offer);
  } else {
    res.status(404).json({ message: "Note not found" });
  }

  res.json(offer);
});

//@description     Create offer
//@route           POST /api/offer/create
//@access          Private

const CreateOffer = asyncHandler(async (req, res) => {
  const { progLang, date, workTime, location, description } = req.body;

  if (!progLang || !workTime| !location || !description) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const offer= new Offer({ user: req.user._id, progLang, date, workTime, location, description });

    const createdOffer = await offer.save();

    res.status(201).json(createdOffer);
  }
});

//@description     Delete single offer
//@route           GET /api/notes/:id
//@access          Private
const DeleteOffer = asyncHandler(async (req, res) => {
  const offer = await Offer.findById(req.params.id);

  if (offer.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (offer) {
    await offer.remove();
    res.json({ message: "Note Removed" });
  } else {
    res.status(404);
    throw new Error("Note not Found");
  }
});

// @desc    Update an offer
// @route   PUT /api/offer/:id
// @access  Private
const UpdateOffer = asyncHandler(async (req, res) => {
  const { progLang, date, workTime, location, description } = req.body;

  const offer = await Offer.findById(req.params.id);

  if (offer.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (offer) {
    offer.progLang= progLang;
    offer.date = date;
    offer.workTime = workTime;
    offer.location = location;
    offer.description = description;

    const updatedOffer = await offer.save();
    res.json(updatedOffer);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

export { getOfferById, getOffer, CreateOffer, DeleteOffer, UpdateOffer, getOffers};