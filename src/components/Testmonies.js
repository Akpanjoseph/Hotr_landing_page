import React from 'react'

import user from '../img/user.png'
import comma from '../img/comma.png'

export function Testmonies() {


    return (
        <div className='my-40 bg-primary_background py-20'>

            <div className='mx-auto container py-20'>
                {/* title  */}

                <div className='text-center'>
                    <p className='text-white md:text-xl'>TESTIMONIES</p>

                    {/* sub header */}
                    <h3 className='font-bold text-4xl text-white md:text-5xl  '>
                        What God is doing for Others
                    </h3>

                    {/* underline  */}
                    <p ><span className='rounded-sm font-extrabold py-0 text-white text-3xl mx-2'> _____</span> <span className=' font-extrabold py-0 text-white text-3xl mx-2'> _____</span></p>
                </div>
            </div>


            {/* testimonies card */}

            <div className='pb-20 flex flex-row mx-auto container space-x-9'>
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

            {/* join us section */}
            <div className='mb-10 mx-auto container max-sm'>

                {/* join us text */}
                <p className='flex justify-center items-center '>
                    <a href="#" className='bg-white   text-primary_background font-bold px-40 py-2 rounded-full md:px-20 md:py-4'>Share your Testimony</a>
                </p>

            </div>

        </div>
    )
}
 