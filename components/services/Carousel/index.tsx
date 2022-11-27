import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



export default function Carousel({ children }: { children: any[] }) {

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={'auto'}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='overflow-visible'
    >
      {children}
    </Swiper>
  )
}