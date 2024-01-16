'use client';
import React from 'react'
import Workshopbox from '@/components/common/Workshopbox'
import Modal from '@/components/workshops/Modal'
import { useState } from 'react'

const Page = () => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div>
        <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        />

       
        <div
        className='flex flex-wrap gap-3'
        >
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

        </div>
    </div>
  )
}

export default Page