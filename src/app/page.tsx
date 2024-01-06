"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Navbar from '@/components/navbar/navbar'
export default function Home(){
  const router = useRouter()
const NextPage = ()=>{
  router.push("/page2")
}
  return(
    <main id="mainpage" className=" text-white flex items-center flex-col w-full">
          <div>
          <Navbar/>
        </div>

      <div id="mid_div">
        <div id="mid-section" className="lg:w-1/2 sm:w-3/4  pl-20">
            <div className=" text-5xl"><span>Modern</span> <span className=" font-thin">Landing Page</span></div>
            
            <div>
              <p id="pragraph-text" className=" font-extralight pt-5 pb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta sit sequi provident consequatur doloribus sint nesciunt dolorum accusamus. Quo aut consequatur iusto asperiores excepturi rerum fuga omnis consectetur cum sunt.
              </p>
            </div>

            <div onClick={NextPage} id="bottom_btn" className="flex items-center hover:bg-slate-800 active:bg-slate-950">
              <button>Get Started</button>
            <div>
                <Image  id="arrow"
                src={"./all_svg/arrow-right-line.svg"}
                alt={"rightArrow"}
                width={20}             
                height={20}
                />
              </div>
            </div>
        </div>
      </div>
    </main>
  )
}