import mongoose from "mongoose"
const UserData = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Fill the username"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Fill the username"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Fill the username"]
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenVerify:Date,
    token:String,
    tokenVerify:Date,
});
export const UserSchema = mongoose.models.users || mongoose.model("users",UserData)