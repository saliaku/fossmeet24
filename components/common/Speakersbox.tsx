import { urlForImage } from '@/sanity/lib/image';
import { Speaker } from '@/sanity/schemas/speaker';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import styles from './Speakersbox.module.css';

export default function Speakersbox({
  setShowModal, setCurrSpeaker, speaker
}: {
  speaker: Speaker,
  setShowModal: Dispatch<SetStateAction<boolean>>,
  setCurrSpeaker: Dispatch<SetStateAction<Speaker>>
}) {
  return (
    <div className={styles['speaker-box']}>
      <div className={styles['img-box']}>
        <Image
          src={urlForImage(speaker.image)}
          alt="speaker photo"
          width={150}
          height={150}
          className={styles['rounded-image']}
        />
      </div>

      <div className={styles['content-box']}>
        <div className={styles['text-box']}>
          {/* Dynamic name & description */}
          <h1 className={styles['speaker-name']}>{speaker.name}</h1>
          <p className="">{speaker.description}</p>
        </div>

        <div className={styles['bottom-btns']}>
          <div className={styles['bottom-icons']}>
            <a href={speaker.socials[0].link} target="_blank" rel="noopener noreferrer">
              <Image
                src="/web.svg"
                alt="web icon"
                width={20}
                height={20}
                style={{ marginRight: '10px' }}
              />
            </a>
            <a href={speaker.socials[1].link} target="_blank" rel="noopener noreferrer">
              <Image
                src="/linkedin.svg"
                alt="linkedin icon"
                width={20}
                height={20}
              />
            </a>
          </div>
          <div className={styles['view-btn']}>
            <button
              onClick={() => {
                setShowModal(true)
                setCurrSpeaker(speaker)
              }}
            >
              <Image
                src={'/arrow_right_alt.png'}
                width={28}
                height={28}
                alt="right_arrow"
              />
            </button>
          </div>
        </div>
      </div>
      <div className={styles['talk-box']}>
        <p className={styles['talk-text']}>TALK</p>
        <p className={styles['talk-type']}>{speaker.talk}</p>
      </div>
    </div>
  )
}
