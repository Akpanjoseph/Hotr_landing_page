import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import logo from '../img/header_img.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

 function HeroSection() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* slider 1 */}
        <SwiperSlide > 
            <div className="hero" >
                <div className="flex flex-col justify-center items-center w-full h-full text-white space-y-8">
                    <h1 className="font-bold text-5xl">You are Welcome Here!</h1>

                    <p className="max-w-sm  text-16 text-center"> 
                    We believe in the power of God's word to change lives and value the practical application of His word to make a difference in who we are and what we do.
                    </p>

                    <p className="border-2 border-white px-8 py-2 rounded-lg ">
                        <a href="#">Join us now</a>
                    </p>
                </div>
            </div>
        </SwiperSlide> 


        {/* slider 2 */}
        <SwiperSlide> 
            <div className="hero" >
                <div className="flex flex-col justify-center items-center w-full h-full text-white space-y-8">
                    <h1 className="font-bold text-5xl">You are Welcome Here!</h1>

                    <p className="max-w-sm  text-16 text-center"> 
                    We believe in the power of God's word to change lives and value the practical application of His word to make a difference in who we are and what we do.
                    </p>

                    <p className="border-2 border-white px-8 py-2 rounded-lg ">
                        <a href="#">Join us now</a>
                    </p>
                </div>
            </div>
        </SwiperSlide> 


        {/* slider 3 */}
        <SwiperSlide> 
            <div className="hero" >
                <div className="flex flex-col justify-center items-center w-full h-full text-white space-y-8">
                    <h1 className="font-bold text-5xl">You are Welcome Here!</h1>

                    <p className="max-w-sm  text-16 text-center"> 
                    We believe in the power of God's word to change lives and value the practical application of His word to make a difference in who we are and what we do.
                    </p>

                    <p className="border-2 border-white px-8 py-2 rounded-lg ">
                        <a href="#">Join us now</a>
                    </p>
                </div>
            </div>
        </SwiperSlide> 


      </Swiper>
    </>
  );
}

export default HeroSection;