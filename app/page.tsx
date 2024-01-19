'use client'
import Workshopbox from '@/components/common/Workshopbox'
import Footer from '@/components/footer/Footer'
import workdata from '@/public/workshopsData.json'
import { useState } from 'react'
import Navbar from '../components/common/Navbar'

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [currWorkshop,setCurrWorkshop]=useState({});
  return (
    <div>
      <Navbar />
      <main>
        <h1 className="text-4xl font-bold mb-8">Hello World!</h1>
        <br></br>
        <Workshopbox
          setShowModal={setShowModal}
          setCurrWorkshop={setCurrWorkshop}
          workshop={workdata[0]}
        />

        <br></br>

        {/* <Speakersbox
          setShowModal={setShowModal}
          name={'Dr. Sasi Kumar'}
          image={'/sasi_kumar.svg'}
          event={'TALK'}
          event_detail={'Keynote Talk'}
          description={
            'Dr. Sasi Kumar is a Free Software activist and a member of the Board of Directors of the Free Software Foundation of India. He has conducted research in atmospheric electricity, rainfall studies and cloud physics and has wrote popular science articles. He has also published three popular science books in Malayalam. He is an educationist and has been teaching school children for about a decade.'
          }
        /> */}

        <Footer />
      </main>
    </div>
  )
}
