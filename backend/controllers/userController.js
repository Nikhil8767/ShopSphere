import validator from 'validator';
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';




const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// route for user login ************************************************************************

const loginUser=async(req,res)=>{

    try {
        const {email,password}=req.body;

        const user=await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"user doesn't exists"})
        }

        const isMatch=await bcrypt.compare(password,user.password)

        if(isMatch){
            const token=createToken(user._id)
            res.json({success:true,token})

        }
        else{
            res.json({success:false,message:'invalid credentials'})
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}


// route for user registration**********************************************************************
const registerUser = async (req, res) => {
    try {
        const { name,mobile, email, password } = req.body || {};

        // Ensure password exists and is a valid string
        if (!password || typeof password !== "string") {
            return res.json({ success: false, message: "Invalid password format" });
        }

        // Checking if user exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validating email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        //validating mobile number
        if (!/^\d{10}$/.test(mobile)) {
            return res.json({ success: false, message: "Please enter a valid 10-digit mobile number" });
        }

        // Validating password strength
        if (password.length < 7) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password.toString(), salt); // Ensure password is a string

        // Creating new user
        const newUser = new userModel({
            name,
            mobile,
            email,
            password: hashedPassword
        });

        // Saving user to the database
        const user = await newUser.save();

        // Generating token
        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


// route for admin login*************************************************************************

const adminLogin=async(req,res)=>{

    try {
        const {email,password}=req.body
        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        }
        else{
            res.json({success:false,msg:"invalid credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}



// route for shipment admin login

const shipmentAdmin=async(req,res)=>{

}





export {loginUser,registerUser,adminLogin,shipmentAdmin}


