import Image from 'next/image'
import styles from './Workshopbox.module.css'

export default function Workshopbox({ setShowModal, setCurrWorkshop, workshop }) {
  return (
    <div className={styles['workshop-box']}>
      <img src={workshop.image} alt='Event poster' className={styles['poster']} />

      <div className={styles['content-box']}>
        <div className={styles['date-time']}>
          {/* Dynamic date and time */}
          <span className={styles['date']}>{workshop.date}</span>
          <div className={styles['dot']}></div>
          <span className={styles['time']}>{workshop.time}</span>
        </div>

        <h4 className={styles['title']}>{workshop.title}</h4>
        <p className={styles['description']}>{workshop.description}</p>

        <div className={styles['bottom-btns']}>
          <div className={styles['organizer']}>
            <Image src={workshop.organizerLogo} width={28} height={28} alt='Logo of organizer' className={styles['organizer-logo']} />
            <span>{workshop.organizer}</span>
          </div>

          <button
            onClick={() => {
              console.log(workshop)
              setCurrWorkshop(workshop)
              setShowModal(true)
            }}
            className={styles['view-btn']}
          >
            <img src={'/arrow_right.svg'} alt="View more" />
          </button>
        </div>
      </div>
    </div>
  )
}
