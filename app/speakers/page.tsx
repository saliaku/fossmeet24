'use client'

import Navbar from '@/components/common/Navbar';
import Footer from '@/components/footer/Footer';

import Speakerbox from '@/components/common/Speakersbox';
import Modal from '@/components/speakers/Modal';
import { useEffect, useState } from 'react';

import PageTitle from '@/components/common/PageTitle';
import { client } from '@/sanity/lib/client';
import { Speaker } from '@/sanity/schemas/speaker';
import styles from './page.module.css';

export const revalidate = 3600

export default function Page() {
    useEffect(() => {
        client.fetch<Speaker[]>(`*[_type=="speaker"]`).then((data) => { setSpeakers([...data]) })
    }, [])

    const [speakers, setSpeakers] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [currSpeaker, setCurrSpeaker] = useState<Speaker>()

    return (
        <div className={styles['speaker-container']}>
            <Navbar />
            <PageTitle imageSrc={'./phone.png'} title="Speakers" tag="Renowned" />
            <main>
                <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    currSpeaker={currSpeaker}
                />

                <div className="outer-margin">
                    <div className={styles['speakers-grid']}>
                        {speakers.map((speaker, index) => (
                            <Speakerbox
                                key={index}
                                setShowModal={setShowModal}
                                setCurrSpeaker={setCurrSpeaker}
                                speaker={speaker}
                                width={"100%"}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
