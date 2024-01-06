"use client"
import Link from "next/link";
import Image from "next/image";
import Style from './signup.module.css';
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup(){
    const router = useRouter()
    const [user,setUser]=useState({username:"",email:"",password:""})

    const onSignup = async(e:any)=>{
        e.preventDefault();
        try{
            if(!user.username || !user.email || !user.password){
               alert("Data not full fill")
            }else{
                await axios.post("/api/users/signup",user);
                router.push("/login")

            }
        }catch(error:any){
            console.log("Data fon found");
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
                <span>Username</span>
                    <input 
                        type="text"
                        placeholder="username"
                        name="username"
                        id="username"
                        value={user.username}
                        className=" h-10 rounded-md pl-3 text-black"
                        onChange={(e)=>setUser({...user, username:e.target.value})}
                    />
                    <span>Email</span>
                    <input 
                        type="email"
                        placeholder="email"
                        name="email"
                        id="email"
                        value={user.email}
                        className=" h-10 rounded-md pl-3 text-black"
                        onChange={(e)=>setUser({...user, email:e.target.value})}
                    />
                    <span>Password</span>
                    <input 
                        type="password"
                        placeholder="password"
                        name="password"
                        id="password"
                        value={user.password}
                        className=" h-10 rounded-md pl-3 text-black"
                        onChange={(e)=>setUser({...user, password:e.target.value})}
                    />
                    <button onClick={onSignup} className="mt-5 border rounded-2xl p-1 hover:bg-slate-700 border-slate-400">Login</button>
                </form>
            </div>
        </div>
    </div>
    )
}