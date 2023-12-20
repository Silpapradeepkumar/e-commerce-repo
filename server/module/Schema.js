import mongoose,{ Schema,model } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    rate:{
        type: Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
},{timestamps:true});
const User = model("userdata",userSchema);
export default User;

