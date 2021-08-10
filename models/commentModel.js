import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    content: {
        type: String,
        required: true
    },
    date: {
        type:Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    offer: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Offer",
    }
  
  });

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;