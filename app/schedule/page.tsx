'use client';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/footer/Footer';
import SchedulePage from '@/components/schedule/SchedulePage';


const Page = () => {
    return (
        <div 
        className="Page 
            bg-white
            font-semibold
        ">
            <Navbar/>
            <SchedulePage/>
            <Footer/>
        </div>
    )
}

export default Page





