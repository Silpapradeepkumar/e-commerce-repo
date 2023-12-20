import mongoose,{ Schema,model } from "mongoose";

const newSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    address:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
},{timestamps:true});
const User1 = model("newuserdata",newSchema);
export default User1;

