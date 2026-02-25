import mongoose from "mongoose";
import User from "../models/userModel.js";
import validator from 'validator';
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";


const TOKEN_EXPIRES_IN = '24h';
const JWT_SECRET = 'quizapp_super_secret_123'


// register 
export async function register(req,res) {
    try {
        const {name,email,password}= req.body;
        if(!name || !email || !password ){
            return res.status(400).json({
                success: false,
                message: " All fields required"
            })
        }
        if(!validator.isEmail(email)){
               return res.status(400).json({
                success: false,
                message: " Invalid Email"
            })
        }

        const exist = await User.findOne({email}).lean();
        if(exist)  return res.status(400).json({success:false,message: "User already exists"})


            const newId = new mongoose.Types.ObjectId();
            const hashedPassword = await bcrypt.hash(password,10)

            const user = new User({
                _id:newId,
                name,
                email,
                password: hashedPassword,
            })

await user.save();

            if(!JWT_SECRET) throw new Error("JWT_SECRET not found on the server")

                const token =  jwt.sign({id:newId.toString()}, JWT_SECRET, {expiresIn: TOKEN_EXPIRES_IN})

                return res.status(201).json(
                    {
              success:true,
              message: "Account created succesfully",
              token,
              user:{id:user._id.toString(), name:user.name, email:user.email}


                })

    } catch (err) {
        console.error("register error", err);
        return res.status(500).json({success:false,message: " server error"})
        
    }
}




// login 

export async function login(req,res) {
    try {
        const {email,password} = req.body;

        if (!email || !password) {
          return  res.status(400).json({success:false,message: " All fields are required"})
        
        }

        const user = await User.findOne({email})
        if (!user) {
           return res.status(400).json({success:false,message: " Invalid email or passwor"})

        
        }


        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
        return    res.status(400).json({success:false,message: " Invalid email or password"})
        
        }




           const token =  jwt.sign({id:user._id.toString()}, JWT_SECRET, {expiresIn: TOKEN_EXPIRES_IN})

                return res.status(200).json(
                    {
              success:true,
              message: "login succesfully",
              token,
              user:{id:user._id.toString(), name:user.name, email:user.email}


                })


    }catch (err) {
        console.error("login error", err);
        return res.status(500).json({success:false,message: " server error"})
        
    }
}