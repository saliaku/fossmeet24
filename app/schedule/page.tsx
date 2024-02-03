import Navbar from '@/components/common/Navbar'
import Footer from '@/components/footer/Footer'
import SchedulePage from '@/components/schedule/SchedulePage'

export default function Page() {
    return (
        <div className="Page bg-white font-semibold" >
            <Navbar />
            <SchedulePage />
            <Footer />
        </div>
    )
}
