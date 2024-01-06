'use client'
import Link from "next/link"
import Style from './dashside.module.css'
import { sideDetails } from "../sidebarDetails/sideDets"
export default function DashSidebar(){
    return(
        <div id={Style.main} className=" bg-slate-800 p-6 text-white">
            <ul id={Style.finalul}>
                {
                    sideDetails.map((item)=>(
                    
                        <li key={item.title} className="  text-md text-white font-semibold flex flex-col p-2">
                            {item.title}
                            <ul className="flex flex-col gap-1" key={item.title}>
                                    {
                                        item.list.map((list)=>(
                                            <Link key={list.title} href={list.path}><li key={list.title} className=" text-sm bg-cyan-800 rounded-xl hover:bg-cyan-100 active:bg-cyan-950 text-green-600 p-1">{list.title}</li></Link>
                                        ))
                                    }
                            </ul>

                        </li>
                    
                    ))
                }
            </ul>
           
        </div>
    )
}