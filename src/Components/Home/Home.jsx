import './Home.css'
import React from 'react'
import SwiperCore, {EffectCoverflow, Pagination, Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import 'swiper/css/autoplay'

SwiperCore.use([EffectCoverflow, Pagination, Autoplay])

const slide_img = [
    "https://clck.ru/32kctH",
    "https://clck.ru/32kcoD",
    "https://clck.ru/32kcxM",
    "https://clck.ru/32kd5f",
    "https://clck.ru/32kcCa",
    
  ];

const Home = () => {

   

    return (
        <div>
             <Swiper
        effect={"slide"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          
        }}
        pagination={{clickable:true}}
        autoplay={{delay:2000}}
        className="mySwiper"
      >
     
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
        </div>
    )
}
export default Home