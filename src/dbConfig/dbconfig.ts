
import mongoose from "mongoose"

export const ConnectionStr = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on("connected",()=>{
            console.log("DB connection successfull")
        })
        connection.on("error",()=>{
            console.log("DB connection is not found")
        })

    }catch(error:any){
        console.log("Data not connected")
    }
 
  

}