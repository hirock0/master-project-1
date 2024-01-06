
import Link from "next/link";
import Style from './nav.module.css'
import Image from "next/image";
export default function Navbar(){

    return(
        <div id={Style.main}className="header">
          <nav id={Style.nav} className=" flex items-center justify-between pl-10 pr-10 h-24">
           <div id={Style.left} className="flex items-center gap-4">
            <div>
                <Image 
                src={"/photos/hyundri.png"} 
                alt={"hyundri"}
                width={40}               
                height={40}
                className={Style.logo}
                />
            </div>
            <div id={Style.logotext}>
                Company Log
            </div>
           </div>
            <div className=" h-full">
                <ul id={Style.rightUl} className=" font-thin text-sm flex sm:gap-2 ">
                    <li><Link href={`/dashboard`}>Dashboard</Link></li>
                    <li><Link href={`/`}>About Us</Link></li>
                    <li><Link href={`/`}>Gellery</Link></li>
                    <li><Link href={`/`}>Contact</Link></li>
                    <li id={Style.login}><Link href={'/login'}>Login</Link></li>
                </ul>
            </div>
            </nav>
    
        </div>
           
    )
}