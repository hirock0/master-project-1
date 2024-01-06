"use client"
import Link from "next/link";
import Image from "next/image";
import Style from './login.module.css';
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Login(){

    const router = useRouter()
    const [user,setUser]=useState({email:"",password:""})

    const onLogin = async(e:any)=>{
        e.preventDefault();
        try{
            if(!user.email || !user.password){
               alert("Data not full fill")
            }else{

             await axios.post("/api/users/login",user);
             router.push("/dashboard");
            }
        }catch(error:any){
            console.log("Data not found");
            alert("Data not found")
        }
        
    }
  
    
    return(
        <div >        
              <div className=" absolute pl-5 pt-5 text-white">
                    <Link href={`/`}>
                        <Image 
                        src={"/all_svg/arrow-right-line.svg"} 
                        alt={"leftarrow"} 
                        width={30}                       
                        height={30}
                        id={Style.leftarrow}
                       
                        />
                    </Link>
                </div>


        <div id={Style.loginDiv} className=" min-h-screen flex items-center justify-center">
            <div id={Style.loginpalate} className="  backdrop:filter backdrop-blur-2xl opacity-1 text-white  p-20 rounded-xl flex flex-col items-center gap-5">
                <form className="flex flex-col gap-2">
                    <span>Email</span>
                    <input 
                        type="text"
                        placeholder="email"
                        name="email"
                        id="email"
                        className=" h-10 rounded-md pl-3 text-black"
                        value={user.email}
                        onChange={(e)=>setUser({...user,email:e.target.value})}
                    />
                    <span>Password</span>
                    <input 
                        type="text"
                        placeholder="password"
                        name="password"
                        id="password"
                        className=" h-10 rounded-md pl-3 text-black"
                        value={user.password}
                        onChange={(e)=>setUser({...user,password:e.target.value})}
                    />
                    <button onClick={onLogin} className=" border rounded-2xl p-1 hover:bg-slate-700 border-slate-400">Login</button>
                </form>
             <Link href={`/`}>forgot password?</Link>
             <Link className=" border pl-4 pr-4 p-1 rounded-md border-gray-400 hover:bg-slate-700" href={`/signup`}>Sign Up</Link>
             <button  className=" border rounded-2xl p-1 hover:bg-slate-700 border-slate-400">Admin login</button>
            </div>
            
        </div>
    </div>
    )
}