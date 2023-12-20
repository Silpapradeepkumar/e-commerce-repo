import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import User from "./module/Schema.js";
import User1 from "./module/userSchema.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
dotenv.config();


app.post('/product/post',async(req,res)=>{
    try {
        const {name,rate,description} = req.body;
        const user = new User({name,rate,description});
        const savedUser = await user.save();
        res.json(savedUser);
        
    } catch (error) {
        console.log(error.message);
    }
})

app.get('/product/get',async(req,res)=>{
    try {
        const result = await User.find();
        res.json(result);
    } catch (error) {
     res.json(error.message)   
    }
})
app.get('/product/get/:id',async(req,res)=>{
    const {id}=req.params;
    try {
        const result = await User.findById(id);
        res.json(result);
    } catch (error) {
     res.json(error.message)   
    }
})
app.put('/product/put/:id',async(req,res)=>{
    const {id}=req.params;
    const {name,rate,description} = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id,{$set:{name,rate,description}},{new:true});
        res.json(updatedUser);
    } catch (error) {
     res.json(error.message)   
    }
})
app.delete('/product/delete/:id',async(req,res)=>{
    const {id}=req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.json(deletedUser);
    } catch (error) {
     res.json(error.message)   
    }
})
//***************************** */
app.post('/user/post',async(req,res)=>{
    try {
        const {name,address,email,username,password} = req.body;
        const user = new User1({name,address,username,email,password});
        const savedUser1 = await user.save();
        res.json(savedUser1);
        
    } catch (error) {
        console.log(error.message);
    }
})

app.get('/user/get',async(req,res)=>{
    try {
        const result1 = await User1.find();
        res.json(result1);
    } catch (error) {
     res.json(error.message)   
    }
})
app.get('/user/get/:id',async(req,res)=>{
    const {id}=req.params;
    try {
        const result2 = await User1.findById(id);
        res.json(result2);
    } catch (error) {
     res.json(error.message)   
    }
})
app.put('/user/put/:id',async(req,res)=>{
    const {id}=req.params;
    const {name,address,email,username,password} = req.body;
    try {
        const updatedUser1 = await User1.findByIdAndUpdate(id,{$set:{name,address,email,username,password}},{new:true});
        res.json(updatedUser1);
    } catch (error) {
     res.json(error.message)   
    }
})
app.delete('/user/delete/:id',async(req,res)=>{
    const {id}=req.params;
    try {
        const deletedUser1 = await User.findByIdAndDelete(id);
        res.json(deletedUser1);
    } catch (error) {
     res.json(error.message)   
    }
})

const connect=async()=>{
try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected successfully");
} catch (error) {
    console.log(error.message);
}
}
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
connect();
})

