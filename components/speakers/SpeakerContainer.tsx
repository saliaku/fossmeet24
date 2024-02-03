'use client';
import styles from '@/app/speakers/page.module.css';
import Speakerbox from '@/components/common/Speakersbox';
import Modal from '@/components/speakers/Modal';
import { Speaker } from '@/sanity/schemas/speaker';
import { useState } from 'react';


export default function SpeakerContainer({ speakers }: { speakers: Speaker[] }) {

    const [showModal, setShowModal] = useState(false)
    const [currSpeaker, setCurrSpeaker] = useState<Speaker>()


    return <div>
        <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            currSpeaker={currSpeaker}
        />
        <div className={styles['cards-box']}>
            <div className={styles['cards-container']}>
                {speakers.map((speaker, index) => (
                    <Speakerbox
                        key={index}
                        setShowModal={setShowModal}
                        setCurrSpeaker={setCurrSpeaker}
                        speaker={speaker}
                    />
                ))}
            </div>
        </div>
    </div>
}