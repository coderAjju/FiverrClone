import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    username: { type: String, required: true,unique:true },
    email: { type: String, required: true, unique: true },
    image:{type:String,required:false},
    country:{type:String,required:true},
    phone:{type:String,required:false},
    password: { type: String, required: true },
    desc:{type:String,required:false},
    isSeller:{type:Boolean,default:false},
},{
    timestamps:true
});

export default mongoose.model("user",userSchema);