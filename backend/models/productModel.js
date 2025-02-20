import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:Array,required:true},
    category:{type:String,required:true,enum:["clothing","Accessories","Footware"]},
    subCategory:{type:String,required:true},
    subSubCategory:{type:String,required:true},
    // image:{type:Array,required:true},
    color:{type:String},
    sizes:{type:Array,required:true},
    brand:{type:String,required:true},
    bestseller:{type:Boolean},
    date:{type:Date,required:true}

})

const productModel=mongoose.models.product || mongoose.model("product",productSchema);

export default productModel;