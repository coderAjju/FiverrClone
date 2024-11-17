import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const gigSchema = new Schema({
    userId:{type:String,required:true},
    title:{type:String,required:true},
    desc:{type:String,required:true},
    totalStars:{type:Number,required:true,default:0},
    startNumber:{type:Number,required:true,default:0},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    cover:{type:String,required:true},
    images:{type:[String],required:false},
    shortTitle:{type:String,required:true},
    shortDesc:{type:String,required:true},
    deliveryTime:{type:Number,required:true},
    revisionNumber:{type:Number,required:true},
    features:{type:[String],required:false},
    sales:{type:Number,default:0,required:false} 
},{
    timestamps:true
})


export default mongoose.model("gig",gigSchema)