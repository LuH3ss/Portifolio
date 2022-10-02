import React from 'react'
import './Portfolio.css'
import{Swiper, SwiperSlide} from 'swiper/react'
import batatabit from '../../img/batatabit.png'
import changapp from  '../../img/changapp.png'
import countries from '../../img/countries.png'

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
          <a href="https://luh3ss.github.io/platzi-mobile-first/">

              <img src={batatabit} alt="" />
          </a>
        </SwiperSlide>
    
        <SwiperSlide>

          <a href="https://app-changapp.vercel.app/">
            <img src={changapp} alt="" />
          </a>
        </SwiperSlide>    
        <SwiperSlide>
          <a href="https://pi-deploy-client.vercel.app/">

            <img src={countries} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href="https://luh3ss.github.io/portfolio_2022/">

            <img src={exPortfolio} alt="" />
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a href='https://luh3ss.github.io/odin-landing-web-page/'>
            <img src={maqueta} alt="" />
            </a>
        </SwiperSlide>
     </Swiper>
    </div>
  )
}
