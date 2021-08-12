import Request from "../models/reqModel.js";
import asyncHandler from "express-async-handler";

// @desc    Fetch all requests
// @route   GET /api/offers
// @access  Public

const getRequests = asyncHandler(async (req, res) => {
  const request = await Request.find()
    .sort({date: -1})
   res.json(request);
});

//@description     Create Comment
//@route           PUT /api/request/:id
//@access          Private

const createCommentReq = asyncHandler(async (req, res) => {
  const comment = {
    text:req.body.text,
    postedBy:req.user._id
}

Request.findByIdAndUpdate({ _id: req.params.id },{
    $push:{comments:comment}
},{
    new:true
})

.populate("comments.postedBy","_id firstName lastName")
.exec((err,result)=>{
    if(err){
        return res.status(422).json({error:err})
    }else{
        res.json(result)
    }
})
});

//@description     Fetch single offer
//@route           GET /api/offer/:id
//@access          Public

const getRequestById = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);

  if (request) {
    res.json(request);
  } else {
    res.status(404).json({ message: "Request not found" });
  }

  res.json(request);
});

//@description     Create offer
//@route           POST /api/offer/create
//@access          Private

const CreateRequest = asyncHandler(async (req, res) => {
  const { progLang, date, workTime, location, userId } = req.body;

  if (!progLang || !workTime| !location) {
    res.status(400);
    throw new Error("Please Fill all the feilds");
    return;
  } else {
    const request= new Request({ user: userId, progLang, date, workTime, location,});

    const createdRequest = await request.save();

    res.status(201).json(createdRequest);
  }
});

//@description     Delete single offer
//@route           DELETE /api/notes/:id
//@access          Private
const DeleteRequest = asyncHandler(async (req, res) => {
  const request = await Request.findById(req.params.id);

  if (request.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You can't perform this action");
  }

  if (request) {
    await request.remove();
    res.json({ message: "Request Removed" });
  } else {
    res.status(404);
    throw new Error("Request not Found");
  }
});

export { getRequestById, CreateRequest, DeleteRequest, createCommentReq, getRequests};