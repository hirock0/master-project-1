import { ConnectionStr } from "@/dbConfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import { GetDatafromToken } from "@/helper/getDatafromToken";
import { UserSchema } from "@/models/model";
ConnectionStr();
export async function GET(request:NextRequest,content:NextRequest){
    try{
        const userId = await GetDatafromToken(request);
        const id  = {_id:userId}
        const user = await UserSchema.findOne(id).select("-password");
        return NextResponse.json({message:"User Found",data:user});
    }catch(error:any){
        return NextResponse.json({message:"Not found"},{status: 400});
    }
}