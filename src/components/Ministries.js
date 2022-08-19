import React from 'react'

import minstryImg from '../img/childern_mintsry.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export function Ministries() {


    return (
        <div className='my-40'>

            {/* title  */}

            <div className='text-center'>
                <p className='text-primary_background md:text-xl'>MINISTRIES</p>

                {/* sub header */}
                <h3 className='font-bold text-4xl md:text-5xl '>
                    Our Ministries
                </h3>

                {/* underline  */}
                <p ><span className='rounded-sm font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span> <span className=' font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span></p>
            </div>

            {/* Minstries */}
            <div className=' hidden container mx-auto  flex-col space-y-10 justify-center items-center  text-white font-bold my-20 md:flex-row md:space-x-20 md:flex'>

                {/* minstry 1 */}

                <div className='md:mt-10'>
                    <img src={minstryImg} className='rounded-t-3xl' alt="" />
                    <p className='bg-primary_background py-4 rounded-b-3xl text-center '>Children’s Ministry</p>
                </div>


                {/* minstry 2 */}

                <div>
                    <img src={minstryImg} className='rounded-t-3xl' alt="" />
                    <p className='bg-primary_background py-4 rounded-b-3xl text-center '>Children’s Ministry</p>
                </div>

                {/* minstry 3 */}

                <div>
                    <img src={minstryImg} className='rounded-t-3xl' alt="" />
                    <p className='bg-primary_background py-4 rounded-b-3xl text-center '>Children’s Ministry</p>
                </div>
            </div>

            {/* Minstry mobile view section */}

            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper container mx-auto text-white font-bold flex-col space-y-10 justify-center items-center my-20 md:hidden "
            >


                {/* slider 1 */}
                <SwiperSlide >
                    {/* minstry 1 */}

                    <div>
                        <img src={minstryImg} className='rounded-t-3xl' alt="" />
                        <p className='bg-primary_background py-4 rounded-b-3xl text-center '>Children’s Ministry</p>
                    </div>
                </SwiperSlide>



                {/* slider 2 */}
                <SwiperSlide >
                    {/* minstry 2 */}

                    <div>
                        <img src={minstryImg} className='rounded-t-3xl' alt="" />
                        <p className='bg-primary_background py-4 rounded-b-3xl text-center '>Children’s Ministry</p>
                    </div>
                </SwiperSlide>


                {/* slider 3 */}
                <SwiperSlide >
                    {/* minstry 3 */}

                    <div>
                        <img src={minstryImg} className='rounded-t-3xl' alt="" />
                        <p className='bg-primary_background py-4 rounded-b-3xl text-center '>Children’s Ministry</p>
                    </div>
                </SwiperSlide>



            </Swiper>




        </div>
    )
}
