import Image from 'next/image'
import styles from './Speakersbox.module.css'

export default function Speakersbox({
  name,
  image,
  description,
  setShowModal,
  event,
  event_detail,
}) {
  return (
    <div className={styles['speaker-box']}>
      <div className={styles['img-box']}>
        <Image
          src={image}
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
          <h1 className={styles['speaker-name']}>{name}</h1>
          <p className="">{description}</p>
        </div>

        <div className={styles['bottom-btns']}>
          <div className={styles['bottom-icons']}>
            <Image
              src="/web.svg"
              alt="web icon"
              width={20}
              height={20}
              objectFit="contain"
              style={{ marginRight: '10px' }}
            />
            <Image
              src="/linkedin.svg"
              alt="linkedin icon"
              width={20}
              height={20}
              objectFit="contain"
            />
          </div>
          <div className={styles['view-btn']}>
            <button
              onClick={() => {
                setShowModal(true)
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
        <p className={styles['talk-text']}>{event}</p>
        <p className={styles['talk-type']}>{event_detail}</p>
      </div>
    </div>
  )
}
