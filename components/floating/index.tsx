import Link from 'next/link'
import styles from './style.module.scss'

export default function Floating() {

  return (
    <Link href="https://wa.me/5511989613841">
      <a 
        className={`${styles.whatsapp} absolute bottom-8 right-8`} 
        rel="noreferrer noopener"
        target="_blank"
      >
        <img src="./header/whatsapp.png" alt="icone do whatsapp"/>
      </a>
    </Link> 
  )
}