import dynamic from 'next/dynamic'
import Card from './Card'

import { content } from './content'
import styles from './style.module.scss'

const Carousel = dynamic(() => import('./Carousel'), {
  ssr: false,
})

export default function Services() {
  return (
    <section className={styles.section}>

      <div className="mx-auto py-12">
        <Carousel>
          { content.map((item, index) => <Card content={item} key={index} />) }
        </Carousel>
      </div>
      
    </section>
  )
}