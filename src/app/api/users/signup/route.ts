import { NextRequest, NextResponse } from "next/server";
import { ConnectionStr } from "@/dbConfig/dbconfig";
import { UserSchema } from "@/models/model";
import bcryptjs from "bcryptjs"

ConnectionStr()

export async function POST(request:NextRequest){
    try{
        const reqBody = await request.json()
        const {username,email,password} = reqBody;
        const Salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,Salt);
        const newUser = new UserSchema({username,email,password:hashedPassword}).save();
        return NextResponse.json({message:"Data Found Successfully",success:true, newUser})

    }catch(error:any){
        return NextResponse.json({message:"Data Not Found",success:false},{status:500})
    }


}

export async function GET(){
    try{
        const data = await UserSchema.find()
        return NextResponse.json({result:data})
    }catch(error:any){
        return NextResponse.json({result:"Data is not compeleted yet"})
    }
   
}