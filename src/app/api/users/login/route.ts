import { NextRequest, NextResponse } from "next/server";
import { ConnectionStr } from "@/dbConfig/dbconfig";
import { UserSchema } from "@/models/model";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

ConnectionStr()

export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json();
        const {email,password} = reqBody;
        const findData = await UserSchema.findOne({email});
        if(!findData){
            console.log("Data not found");
            return NextResponse.json({message:"Data not found",success:false},{status:500})
        }else{
            const vaildPassword = await bcryptjs.compare(password,findData.password);
            if(!vaildPassword){
                console.log("Password Does not match");
                return NextResponse.json({message:"Data not found",success:false},{status:500})
            }else{
                const tokenData = {
                    id:findData._id,
                    username:findData.username,
                    email:findData.email,
                }
                const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})
                const response = NextResponse.json({message:"Data successfully found",success:true});
                response.cookies.set("token",token,{httpOnly:true});
                return response;
            }
        }
        

    }catch(error:any){
        return NextResponse.json({message:"Data Not Found",success:false},{status:500})
    }


}

