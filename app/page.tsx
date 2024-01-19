'use client'
import Workshopbox from '@/components/common/Workshopbox'
import Footer from '@/components/footer/Footer'
import workdata from '@/public/workshopsData.json'
import { useState } from 'react'
import Navbar from '../components/common/Navbar'

import Speakerbox from '@/components/common/Speakersbox'
import speakerdata from '@/public/speakersData.json'

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [currWorkshop,setCurrWorkshop]=useState({});
  const [currSpeaker,setCurrSpeaker]=useState({});
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
        <Speakerbox
          setShowModal={setShowModal}
          setCurrSpeaker={setCurrSpeaker}
          speaker={speakerdata[0]}
        />
        <br></br>


        <Footer />
      </main>
    </div>
  )
}
