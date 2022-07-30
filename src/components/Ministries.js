import React from 'react'

import minstryImg from '../img/childern_mintsry.png';

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
                <div className='container mx-auto flex flex-col space-y-10 justify-center items-center  text-white font-bold my-20 md:flex-row md:space-x-20'>

                    {/* minstry 1 */}

                    <div>
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
        </div>
    )
}
