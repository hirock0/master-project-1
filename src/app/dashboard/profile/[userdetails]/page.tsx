import { UserSchema } from "@/models/model";

export default async function Userdetails(props:any){
    const userId = props.params.userdetails;
    const id = {_id:userId}
    const userData = await UserSchema.find(id)
    return(
        <div className=" min-h-screen w-screen bg-zinc-600 ">
            <div className="flex items-center justify-center">
                <div className=" bg-red-500 h-20 w-20 flex items-center justify-center rounded-full">
                    Image
                </div>
            </div>
            
                {
                    userData.map((item)=>(
                        <ul key={item.id}>
                        <li key={item.id}>Name: {item.username}</li>
                        <li key={item.id}>Email: {item.email}</li>
                        </ul>
                    ))
                }
            
        </div>
    )
}