"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function DashNavbar(){
    const router = useRouter()


    const onLogout = async()=>{
        try{
            await axios.get(`/api/users/logout`);
            alert("logout successfull");
            router.push("/login");
        }catch(error:any){
            alert("Data is incorret")
        }
}

    return(
        <div className=" bg-slate-800 border h-20 items-center flex justify-between pr-10 pl-10 text-white">
            <div><Link href={"/"}>Home</Link></div>
            <div onClick={onLogout} className=" ml-3 cursor-pointer">Logout</div>
        </div>
    )
}