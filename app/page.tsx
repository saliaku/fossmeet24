'use client'
import Speakersbox from '@/components/common/Speakersbox'
import Workshopbox from '@/components/common/Workshopbox'
import Footer from '@/components/footer/Footer'
import { useState } from 'react'
import Navbar from '../components/common/Navbar'

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <Navbar />
      <main>
        <h1 className="text-4xl font-bold mb-8">Hello World!</h1>
        <br></br>
        <Workshopbox
          setShowModal={setShowModal}
          title={'FFmpeg Workshop'}
          image={'/r1.png'}
          date={'27 Jan'}
          time={'3hrs'}
          description={
            'Kerala Rustaceans is a group that aims to create a community of Rust enthusiasts who can learn, collaborate and share knowledge on projects related to Rust. The group also aims to promote the use of Rust in the state and to attract more developers to the language. They usually organise events, meetups, and hackathons to discuss and learn about the latest developments in Rust'
          }
          organizer={'CSEA'}
          organizerLogo={'/csea-small.png'}
        />

        <br></br>

        <Speakersbox
          setShowModal={setShowModal}
          name={'Dr. Sasi Kumar'}
          image={'/sasi_kumar.svg'}
          event={'TALK'}
          event_detail={'Keynote Talk'}
          description={
            'Dr. Sasi Kumar is a Free Software activist and a member of the Board of Directors of the Free Software Foundation of India. He has conducted research in atmospheric electricity, rainfall studies and cloud physics and has wrote popular science articles. He has also published three popular science books in Malayalam. He is an educationist and has been teaching school children for about a decade.'
          }
        />

        <Footer />
      </main>
    </div>
  )
}
