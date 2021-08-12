import mongoose from "mongoose";

const requestSchema = mongoose.Schema(
  {
    progLang: {
        type: String,
        required: true
    },
    date: {
        type:Date,
        default: Date.now
    },
     workTime: {
        type: String,
        required: true
    },
    location: {
        type:String,
        required: true
    },
    comments:[{
        text: String,
        postedBy:{type:mongoose.Schema.Types.ObjectId,ref:"User"}
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      }
  
  });

const Request = mongoose.model("Request", requestSchema);

export default Request;