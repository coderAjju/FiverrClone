import mongoose from "mongoose";
import { Schema } from "mongoose";

const messageSchema = new Schema({
    userId:{type:String,required:true},
    desc:{type:String,required:true},
    conversationId:{type:String,required:true},
},{
    timestamps:true
});

export default mongoose.model("message",messageSchema)