"use client"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Profile(){
    const router = useRouter()
const Details = async()=>{
    const data = await axios.get("/api/users/me")
    router.push(`/dashboard/profile/${data.data.data._id}`)
}
    
    return(
        <main className=" bg-slate-800 min-h-screen  text-white">
            <div className=" p-10">
                <div className="  flex flex-col items-center justify-center">
                    <div className=" w-full flex items-center justify-between">
                    <h1 className=" font-thin text-3xl">This Is A Heading</h1>
                    <button className="cursor-pointer border pl-10 pr-10 p-1 rounded-lg" onClick={Details}>Profile</button>
                    </div>
                    
                    <p className=" font-thin mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ullam ipsam temporibus quaerat iusto, aspernatur, provident exercitationem culpa dignissimos placeat voluptatum? Nam iure, temporibus magni illo amet labore qui dolore quaerat fugit neque, dolor ut! Libero magnam facere ipsum autem? Earum accusantium fuga adipisci obcaecati neque, voluptates inventore quae eaque.
                    </p>
                </div>
            </div>
            
        </main>
    )
}