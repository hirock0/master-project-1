
import DashSidebar from '@/components/dashboard/dashsidebar/dashsidebar'
import DashNavbar from '@/components/dashboard/dashnav/dashnav'
import Style from './dashlayout.module.css'
export default function DashLayout({
    children,
}:{
    children:React.ReactNode
}){
    return(
        <main id={Style.main}>

            <div>
                <DashNavbar/>
            </div>

            <div className='flex'>

                <div className=' bg-pink-200'>
                    <DashSidebar/>
                </div>

                <div>
                    {children}
                </div>

            </div>
        </main>
    )
}