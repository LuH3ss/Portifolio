import React from 'react'
import './Portfolio.css'
import{Swiper, SwiperSlide} from 'swiper/react'
import batatabit from '../../img/batatabit.png'
import changapp from  '../../img/changapp.png'

import exPortfolio from '../../img/ex-portfolio.png'
import maqueta from '../../img/maqueta.png'
import'swiper/css'



export default function Portfolio() {
  return (
    <div className="portfolio" id='Proyectos'>

     <span>Proyectos Recientes</span>
     <span>Portfolio</span>

     <Swiper
     spaceBetween={0}
     slidesPerView={3}
     grabCursor={true}
     className='portfolio-slider'
     >
        <SwiperSlide>
            <img src={batatabit} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={maqueta} alt="" />
        </SwiperSlide>
    
        <SwiperSlide>
            <img src={changapp} alt="" />
        </SwiperSlide>    
        <SwiperSlide>
            <img src={exPortfolio} alt="" />
        </SwiperSlide>
     </Swiper>
    </div>
  )
}
