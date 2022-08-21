import React from 'react'

import user from '../img/user.png'
import comma from '../img/comma.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export function Testmonies() {


    return (
        <div className='my-40 bg-primary_background py-20'>

            <div className='mx-auto container py-10 md:py-20'>
                {/* title  */}

                <div className='text-center'>
                    <p className='text-white md:text-xl'>TESTIMONIES</p>

                    {/* sub header */}
                    <h3 className='font-bold text-2xl text-white md:text-5xl  '>
                        What God is doing for Others
                    </h3>

                    {/* underline  */}
                    <p ><span className='rounded-sm font-extrabold py-0 text-white text-3xl mx-2'> _____</span> <span className=' font-extrabold py-0 text-white text-3xl mx-2'> _____</span></p>
                </div>
            </div>


            {/* testimonies card */}

            <div className='pb-10 md:pb-20 md:flex flex-row mx-auto container space-x-9 hidden'>
                {/* container */}

                {/* card 1 */}

                <div className='bg-white flex flex-row space-x-4 p-4 rounded-md'>

                    <div className='max-md'>
                        <img src={user} alt="" width='200px' />
                    </div>


                    <div className='max-sm leading-loose tracking-wide'>

                        <div className='-mt-10 flex justify-center items-center'>
                            <img src={comma} alt="" />
                        </div>

                        <p className='px-8 text-left'>High performance protein bar infrared sauna healthy blood sugar lymphatic drainage Himalayan salt lamps nourishing chocolate protein supplement.</p>

                        <p className='text-left px-8 font-bold'>Elizabeth Chukwuemeka</p>
                    </div>
                </div>


                {/* card 2 */}
                <div className='bg-white flex flex-row space-x-4 p-4 rounded-md'>

                    <div className='max-md'>
                        <img src={user} alt="" width='200px' />
                    </div>


                    <div className='max-sm leading-loose tracking-wide'>

                        <div className='-mt-10 flex justify-center items-center'>
                            <img src={comma} alt="" />
                        </div>

                        <p className='px-8 text-left'>High performance protein bar infrared sauna healthy blood sugar lymphatic drainage Himalayan salt lamps nourishing chocolate protein supplement.</p>

                        <p className='text-left px-8 font-bold'>Elizabeth Chukwuemeka</p>
                    </div>
                </div>




                {/* card 3 */}
                <div className='bg-white flex flex-row space-x-4 p-4 rounded-md'>

                    <div className='max-md'>
                        <img src={user} alt="" width='200px' />
                    </div>


                    <div className='max-sm leading-loose tracking-wide'>

                        <div className='-mt-10 flex justify-center items-center'>
                            <img src={comma} alt="" />
                        </div>

                        <p className='px-8 text-left'>High performance protein bar infrared sauna healthy blood sugar lymphatic drainage Himalayan salt lamps nourishing chocolate protein supplement.</p>

                        <p className='text-left px-8 font-bold'>Elizabeth Chukwuemeka</p>
                    </div>
                </div>
            </div>



            {/* Testimonies mobile view section */}

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
                className="mySwiper pb-20   flex-row mx-auto container space-x-9 md:hidden "
            >

                {/* slider 1 */}
                <SwiperSlide >
                    {/* Testimonies 1 */}
                    <div className='bg-white  flex flex-col  justify-center items-center p-4 rounded-md'>

                        <div className='max-md mb-2'>
                            <img src={user} alt="" width='100px' />
                        </div>


                        <div className='max-sm '>

                            <div className=' flex justify-center items-center'>
                                <img src={comma} alt="" width={'40px'} />

                                <p className='px-2 text-center text-sm '>High performance protein bar infrared sauna healthy blood sugar lymphatic drainage Himalayan salt lamps nourishing chocolate protein supplement.</p>
                            </div>
                        </div>

                        <p className='text-center px-8 font-bold'>Elizabeth Chukwuemeka</p>
                    </div>

                </SwiperSlide>



                   {/* slider 2 */}
                   <SwiperSlide >
                    {/* Testimonies 1 */}
                    <div className='bg-white  flex flex-col  justify-center items-center p-4 rounded-md'>

                        <div className='max-md mb-2'>
                            <img src={user} alt="" width='100px' />
                        </div>


                        <div className='max-sm '>

                            <div className=' flex justify-center items-center'>
                                <img src={comma} alt="" width={'40px'} />

                                <p className='px-2 text-center text-sm '>High performance protein bar infrared sauna healthy blood sugar lymphatic drainage Himalayan salt lamps nourishing chocolate protein supplement.</p>
                            </div>
                        </div>

                        <p className='text-center px-8 font-bold'>Elizabeth Chukwuemeka</p>
                    </div>

                </SwiperSlide>


                   {/* slider 3 */}
                   <SwiperSlide >
                    {/* Testimonies 1 */}
                    <div className='bg-white  flex flex-col  justify-center items-center p-4 rounded-md'>

                        <div className='max-md mb-2'>
                            <img src={user} alt="" width='100px' />
                        </div>


                        <div className='max-sm '>

                            <div className=' flex justify-center items-center'>
                                <img src={comma} alt="" width={'40px'} />

                                <p className='px-2 text-center text-sm '>High performance protein bar infrared sauna healthy blood sugar lymphatic drainage Himalayan salt lamps nourishing chocolate protein supplement.</p>
                            </div>
                        </div>

                        <p className='text-center px-8 font-bold'>Elizabeth Chukwuemeka</p>
                    </div>

                </SwiperSlide>

            </Swiper>




            {/* join us section */}
            <div className='mb-10  mt-8 md:mt-4 mx-auto container max-sm'>

                {/* join us text */}
                <p className='flex justify-center items-center '>
                    <a href="#" className='bg-white   text-primary_background font-bold px-20 py-2 rounded-full md:px-20 md:py-4'>Share your Testimony</a>
                </p>

            </div>

        </div>
    )
}
