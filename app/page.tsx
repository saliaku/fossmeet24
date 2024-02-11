'use client'

import Carousel from "@/components/carousel/carousel"
import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import { client } from '@/sanity/lib/client'
import { Speaker } from '@/sanity/schemas/speaker'
import Speakersbox from "@components/common/Speakersbox"
import { useEffect, useState } from 'react'
import Navbar from '../components/common/Navbar'
import styles from './page.module.css'

export const revalidate = 3600


export default function Home() {
  const [speakers, setSpeakers] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [currSpeaker, setCurrSpeaker] = useState({});

  useEffect(() => {
    client.fetch<Speaker[]>(`*[_type=="speaker"]`).then(setSpeakers)
  }, [])


  return (
    <div>
      <Navbar />
      <Hero />
      <div className={styles['section']}>
        <Carousel>
          {speakers.map((speaker, idx) => (
            <Speakersbox
              key={idx}
              setCurrSpeaker={setCurrSpeaker}
              setShowModal={setShowModal}
              speaker={speaker} />
          ))}
        </Carousel>
      </div>
      <Footer />
    </div>
  )
}
