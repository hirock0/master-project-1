"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
export default function Dashboard(){
    const pathname = usePathname();
    return(
        <main className=" bg-slate-500 min-h-screen w-screen">
            <h1>This is a dashboard</h1>
        </main>
    )
}