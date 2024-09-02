import mongoose from "mongoose";

export const connectDB = async(req,res)=>{
   await mongoose.connect("mongodb+srv://V-online-food:Veera229@cluster0.xtqbj.mongodb.net/V-online-food").then(
    ()=>console.log("DB connected")
   );}
