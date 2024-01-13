import Image from 'next/image'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import styles from './Footer.module.css'

import CallImage from '@/public/call.svg'
import EmailImage from '@/public/email.svg'

const Footer = () => {
  const email = 'fosscell@nitc.ac.in'
  const mailtoLink = `mailto:${email}`
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <p>
            👋<span className={styles.contactFooter}>Contact</span>
          </p>
          <p className={styles.getInTouch}>
            Get in touch
            <br /> with us
          </p>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerRightTop}>
            <div className={styles.footerRightTopLeft}>
              <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
                <Image
                  src={EmailImage}
                  alt="email.png"
                  className={styles.spaceRight}
                  width={50}
                  height={50}
                />
              </a>
              <p>
                <b className={styles.toBold}>Email</b>
                <br />
                fosscell@nitc.ac.in
              </p>
            </div>
            <div className={styles.footerRightTopRight}>
              <Image
                src={CallImage}
                alt="call.png"
                className={styles.spaceRight}
                width={50}
                height={50}
              />
              <p>
                <b className={styles.toBold}>Convenor</b>
                <br />
                +91-9876543
              </p>
            </div>
          </div>
          <div className={styles.footerRightBottom}>
            <p>
              <b className={`${styles.spaceLeft} ${styles.toBold}`}>Social</b>
            </p>
            <div className={styles.socialLinks}>
              <a
                href="https://m.facebook.com/profile.php?id=333141540396903"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/fosscell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com/fosscellnitc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/foss-cell-nitc/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.linkedin.com/company/foss-cell-nitc/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.boldBorder}></div>
      <div className={styles.extremeBottomSection}>
        <div className={styles.extremeBottomSectionLeft}>
          <p className={styles.footerEventName}>FOSSMeet’24</p>
          <div className={styles.boldVerticalLine}></div>
        </div>
        <p className={styles.footerEventInfo}>
          An event conducted by FOSSCell of National Institute of Technology
          Calicut
        </p>
      </div>
    </>
  )
}

export default Footer
