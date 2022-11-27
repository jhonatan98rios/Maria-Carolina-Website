import dynamic from 'next/dynamic'
import Card from './Card'
import { SwiperSlide } from 'swiper/react';

import { content } from './content'
import styles from './style.module.scss'

const Carousel = dynamic(() => import('./Carousel'), {
  ssr: false,
})

export default function Services() {
  return (
    <section id="servicos" className={styles.section}>

      <div className="mx-auto py-16 2xl:w-[96rem]">
        <Carousel>
          { 
            content.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <Card content={item} />
              </SwiperSlide>
            )) 
          }
        </Carousel>
      </div>
      
    </section>
  )
}