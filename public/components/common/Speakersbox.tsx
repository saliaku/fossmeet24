import Image from 'next/image'
import styles from './Speakersbox.module.css'

export default function Speakersbox({
  setShowModal, setCurrSpeaker, ...speaker
}) {
  return (
    <div className={styles['speaker-box']}>
      <div className={styles['img-box']}>
        <Image
          src={speaker.image}
          alt="speaker photo"
          width={150}
          height={150}
          className={styles['rounded-image']}
          objectFit="contain"
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
            <a href={speaker.global} target="_blank" rel="noopener noreferrer">
              <Image
                src="/web.svg"
                alt="web icon"
                width={20}
                height={20}
                objectFit="contain"
                style={{ marginRight: '10px' }}
              />
            </a>
            <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
              <Image
                src="/linkedin.svg"
                alt="linkedin icon"
                width={20}
                height={20}
                objectFit="contain"
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
        <p className={styles['talk-type']}>{speaker.event_detail}</p>
      </div>
    </div>
  )
}
