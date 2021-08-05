import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
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
    description:{
        type: String,
        required: true
    },
    comments:[{
        text:String,
        postedBy:{type:mongoose.Schema.Types,ref:"User"}
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      }
  
  });

const Offer = mongoose.model("Offer", noteSchema);

export default Offer;