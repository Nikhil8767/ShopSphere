// import mongoose, { mongo } from "mongoose";
import mongoose from "mongoose";

const connectDB=async ()=>{

    mongoose.connection.on('connected',()=>{
        console.log("DB connected");
        
    });
    mongoose.connection.on('error',(err)=>{
        console.error("db connection error:",err);
        
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/ecommerce`)
}

export default connectDB;