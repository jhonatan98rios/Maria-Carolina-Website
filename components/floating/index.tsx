import Link from 'next/link'
import styles from './style.module.scss'

export default function Floating() {

  return (
    <Link 
      href="https://wa.me/5511989613841"
      className={`${styles.whatsapp} fixed bottom-8 right-8 z-10`} 
      rel="noreferrer noopener"
      target="_blank"
    >
      <img src="./header/whatsapp.png" alt="icone do whatsapp"/>
    </Link>
  )
}