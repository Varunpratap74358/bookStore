import User from "../model/user.model.js"
import bcryptjs from "bcrypt"

export const signup =async (req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        const user =await User.findOne({email})
        if(user){
            return res.status(400).json({message:"User already existe"})
        }
        const hashpassword=await bcryptjs.hash(password,10)
        // console.log(hashpassword)
        const createUser = new User({
            fullname,
            email,
            password:hashpassword
        })
        createUser.save()
        res.status(201).json({message:"User create successfully",user:{
            _id:createUser._id,
            fullname:createUser.fullname,
            email: createUser.email
        }})
    } catch (error) {
        console.log("Error hai user.controler me")
    }
}


export const login= async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password"})
        }else{
            res.status(200).json({message:"login successfuly",user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error hai user bale login componante mai")
        res.status(400).json({message:"internal server error"})
    }
}