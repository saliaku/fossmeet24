import Link from 'next/link'
import styles from './ViewAllBtn.module.css'
export default function ViewAllBtn({ title, link }) {
  return (
    <div className={styles['view-all-btn']}>
      <Link href={link}>
        <button>{title}</button>
      </Link>
    </div>
  )
}
