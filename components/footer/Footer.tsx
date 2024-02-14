import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles['footer']} id="contact">
      <div className='outer-margin'>
        <div className='inner-margin'>
          <div className={styles['top']}>
            <div className={styles['left']}>
              <div className={styles['contact-wrapper']}>
                <img src='/waving.png' alt='Hello' />
                <span>Contact</span>
              </div>
              <div className={styles['h4-style']}>
                <p >Get in touch with us</p>
              </div>
            </div>

            <div className={styles['right']}>
              <div className={styles['contact-items-wrapper']}>
                <div className={styles['contact-item']}>
                  <div className={styles['contact-item-icon-wrapper']} style={{ backgroundColor: '#F97070' }}>
                    <img src='/mail.svg' alt='Email' />
                  </div>
                  <div className={styles['contact-item-text-wrapper']}>
                    <span className={styles['contact-item-title']}>Email</span>
                    <span className={styles['contact-item-value']}>fosscell@nitc.ac.in</span>
                  </div>
                </div>

                <div className={styles['contact-item']}>
                  <div className={styles['contact-item-icon-wrapper']} style={{ backgroundColor: '#7FE0A6' }}>
                    <img src='/phone.svg' alt='Phone' />
                  </div>
                  <div className={styles['contact-item-text-wrapper']}>
                    <span className={styles['contact-item-title']}>Phone</span>
                    <span className={styles['contact-item-value']}>+91 12345 67890</span>
                  </div>
                </div>
              </div>

              <div className={styles['social']}>
                <span className={styles['social-title']}>Social</span>
                <div className={styles['social-icons-wrapper']}>
                  <a href="https://telegram.me/foss_meet" target="_blank" rel="noreferrer noopener"><img src="/telegram.svg" alt="Telegram" /></a>
                  <a href="https://www.instagram.com/fosscellnitc/" target="_blank" rel="noreferrer noopener"><img src="/instagram.svg" alt="Instagram" /></a>
                  <a href="https://twitter.com/fosscell" target="_blank" rel="noreferrer noopener"><img src="/twitter.svg" alt="Twitter" /></a>
                  <a href="https://www.mastodon.social/@FOSSCell@floss.social" target="_blank" rel="noreferrer noopener"><img src="/mastadon.svg" alt="Mastodon" /></a>
                  <a href="https://www.linkedin.com/company/foss-cell-nitc/mycompany/" target="_blank" rel="noreferrer noopener"><img src="/linkedin-black.svg" alt="LinkedIn" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['bottom']}>
        <div className={styles['logo']}>FOSSMeet&apos;24</div>
        <span>An event conducted by FOSSCell NITC and CSEA</span>
      </div>
    </footer >

  )
}
