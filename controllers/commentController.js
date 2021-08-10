import Comment from  "../models/commentModel.js";
import asyncHandler from "express-async-handler";


const getComments = asyncHandler(async (req, res) => {
    const comment = await Comments.find({ offer: req.offer._id });
    res.json(comment);
  });