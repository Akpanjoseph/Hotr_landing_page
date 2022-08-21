import React from 'react'

import program from '../img/program.png';
import timeIcon from '../img/timeIcon.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export function Events() {


    return (
        <div className='my-40'>

            {/* title  */}

            <div className='text-center'>
                <p className='text-primary_background md:text-xl'>EVENTS</p>

                {/* sub header */}
                <h3 className='font-bold text-2xl md:text-5xl '>
                    Upcoming Events
                </h3>

                {/* underline  */}
                <p ><span className='rounded-sm font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span> <span className=' font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span></p>
            </div>

            {/* Programs */}
            <div className=' hidden container mx-auto  flex-col space-y-10 justify-center items-center  text-black font-bold my-20 md:flex-row md:space-x-20 md:flex'>

                {/* program 1 */}

                <div className='max-sm drop-shadow-lg bg-slate-100 md:mt-10'>
                    {/* program image */}
                    <img src={program} className='rounded-t-lg' alt="" />

                    <div className=' py-4 rounded-b-3xl flex flex-row space-x-10 text-center justify-center items-center'>

                            {/* event date */}
                        <div className='text-primary_background'>
                            <h1 className='text-5xl'>23</h1>

                            <div className='font-normal'>
                                <h3>FEB</h3>
                                <h3>2022</h3>
                            </div>

                        </div>

                        {/* event text */}
                        <div>

                            {/* event title */}
                            <div className='text-center text-xl'>
                                <h2 className=' '>SOLUTION HOUR</h2>
                                <h2>(PRAYER SERVICE)</h2>
                            </div>

                            {/* days */}
                            <div className='flex flex-row space-x-3 font-normal space-y-4 text-start'>
                                <div className='pt-5'>
                                    <img src={timeIcon} alt="" />
                                </div>
                                <div className='text-sm text-text_color'>
                                    <p>EVERY FRIDAY 5PM</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr/>
                    <div className='text-end px-4 py-4 text-primary_background font-thin'>
                        <a href="#">Read more {'>>'}</a>
                    </div>
                </div>

                {/* program 2 */}

                <div className='max-sm drop-shadow-lg bg-slate-100'>
                    {/* program image */}
                    <img src={program} className='rounded-t-lg' alt="" />

                    <div className=' py-4 rounded-b-3xl flex flex-row space-x-10 text-center justify-center items-center'>

                            {/* event date */}
                        <div className='text-primary_background'>
                            <h1 className='text-5xl'>23</h1>

                            <div className='font-normal'>
                                <h3>FEB</h3>
                                <h3>2022</h3>
                            </div>

                        </div>

                        {/* event text */}
                        <div>

                            {/* event title */}
                            <div className='text-center text-xl'>
                                <h2 className=' '>SOLUTION HOUR</h2>
                                <h2>(PRAYER SERVICE)</h2>
                            </div>

                            {/* days */}
                            <div className='flex flex-row space-x-3 font-normal space-y-4 text-start'>
                                <div className='pt-5'>
                                    <img src={timeIcon} alt="" />
                                </div>
                                <div className='text-sm text-text_color'>
                                    <p>EVERY FRIDAY 5PM</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr/>
                    <div className='text-end px-4 py-4 text-primary_background font-thin'>
                        <a href="#">Read more {'>>'}</a>
                    </div>
                </div>

                {/* program 3 */}

                <div className='max-sm drop-shadow-lg bg-slate-100'>
                    {/* program image */}
                    <img src={program} className='rounded-t-lg' alt="" />

                    <div className=' py-4 rounded-b-3xl flex flex-row space-x-10 text-center justify-center items-center'>

                            {/* event date */}
                        <div className='text-primary_background'>
                            <h1 className='text-5xl'>23</h1>

                            <div className='font-normal'>
                                <h3>FEB</h3>
                                <h3>2022</h3>
                            </div>

                        </div>

                        {/* event text */}
                        <div>

                            {/* event title */}
                            <div className='text-center text-xl'>
                                <h2 className=' '>SOLUTION HOUR</h2>
                                <h2>(PRAYER SERVICE)</h2>
                            </div>

                            {/* days */}
                            <div className='flex flex-row space-x-3 font-normal space-y-4 text-start'>
                                <div className='pt-5'>
                                    <img src={timeIcon} alt="" />
                                </div>
                                <div className='text-sm text-text_color'>
                                    <p>EVERY FRIDAY 5PM</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr/>
                    <div className='text-end px-4 py-4 text-primary_background font-thin'>
                        <a href="#">Read more {'>>'}</a>
                    </div>
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
                className="mySwiper container mx-auto text-black font-bold flex-col space-y-10 justify-center items-center my-20 md:hidden "
            >


                {/* slider 1 */}
                <SwiperSlide >
                   {/* program 1 */}

                <div className='max-sm drop-shadow-lg bg-slate-100'>
                    {/* program image */}
                    <img src={program} className='rounded-t-lg' alt="" />

                    <div className=' py-4 rounded-b-3xl flex flex-row space-x-10 text-center justify-center items-center'>

                            {/* event date */}
                        <div className='text-primary_background'>
                            <h1 className='text-5xl'>23</h1>

                            <div className='font-normal'>
                                <h3>FEB</h3>
                                <h3>2022</h3>
                            </div>

                        </div>

                        {/* event text */}
                        <div>

                            {/* event title */}
                            <div className='text-center text-xl'>
                                <h2 className=' '>SOLUTION HOUR</h2>
                                <h2>(PRAYER SERVICE)</h2>
                            </div>

                            {/* days */}
                            <div className='flex flex-row space-x-3 font-normal space-y-4 text-start'>
                                <div className='pt-5'>
                                    <img src={timeIcon} alt="" />
                                </div>
                                <div className='text-sm text-text_color'>
                                    <p>EVERY FRIDAY 5PM</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr/>
                    <div className='text-end px-4 py-4 text-primary_background font-thin'>
                        <a href="#">Read more {'>>'}</a>
                    </div>
                </div>


                </SwiperSlide>



                {/* slider 2 */}
                <SwiperSlide >
                    {/* program 2 */}

                <div className='max-sm drop-shadow-lg bg-slate-100'>
                    {/* program image */}
                    <img src={program} className='rounded-t-lg' alt="" />

                    <div className=' py-4 rounded-b-3xl flex flex-row space-x-10 text-center justify-center items-center'>

                            {/* event date */}
                        <div className='text-primary_background'>
                            <h1 className='text-5xl'>23</h1>

                            <div className='font-normal'>
                                <h3>FEB</h3>
                                <h3>2022</h3>
                            </div>

                        </div>

                        {/* event text */}
                        <div>

                            {/* event title */}
                            <div className='text-center text-xl'>
                                <h2 className=' '>SOLUTION HOUR</h2>
                                <h2>(PRAYER SERVICE)</h2>
                            </div>

                            {/* days */}
                            <div className='flex flex-row space-x-3 font-normal space-y-4 text-start'>
                                <div className='pt-5'>
                                    <img src={timeIcon} alt="" />
                                </div>
                                <div className='text-sm text-text_color'>
                                    <p>EVERY FRIDAY 5PM</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr/>
                    <div className='text-end px-4 py-4 text-primary_background font-thin'>
                        <a href="#">Read more {'>>'}</a>
                    </div>
                </div>


                </SwiperSlide>


                {/* slider 3 */}
                <SwiperSlide >
                   {/* program 3 */}

                <div className='max-sm drop-shadow-lg bg-slate-100'>
                    {/* program image */}
                    <img src={program} className='rounded-t-lg' alt="" />

                    <div className=' py-4 rounded-b-3xl flex flex-row space-x-10 text-center justify-center items-center'>

                            {/* event date */}
                        <div className='text-primary_background'>
                            <h1 className='text-5xl'>23</h1>

                            <div className='font-normal'>
                                <h3>FEB</h3>
                                <h3>2022</h3>
                            </div>

                        </div>

                        {/* event text */}
                        <div>

                            {/* event title */}
                            <div className='text-center text-xl'>
                                <h2 className=' '>SOLUTION HOUR</h2>
                                <h2>(PRAYER SERVICE)</h2>
                            </div>

                            {/* days */}
                            <div className='flex flex-row space-x-3 font-normal space-y-4 text-start'>
                                <div className='pt-5'>
                                    <img src={timeIcon} alt="" />
                                </div>
                                <div className='text-sm text-text_color'>
                                    <p>EVERY FRIDAY 5PM</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr/>
                    <div className='text-end px-4 py-4 text-primary_background font-thin'>
                        <a href="#">Read more {'>>'}</a>
                    </div>
                </div>


                </SwiperSlide>



            </Swiper>




        </div>
    )
}
