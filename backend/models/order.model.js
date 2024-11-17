import mongoose from "mongoose";
import { Schema } from "mongoose";

const orderSchema = new Schema({
    userId:{type:String,required:true},
    gigId:{type:String,required:true},
    image:{type:String,required:false},
    price:{type:Number,required:true},
    title:{type:String,required:true},  
    sellerId:{type:String,required:true},
    buyerId:{type:String,required:true},
    isCompleted:{type:Boolean,required:false},
    payment_intent:{type:String,required:true},
    },{
        timestamps:true
    })

export default mongoose.model("order",orderSchema)