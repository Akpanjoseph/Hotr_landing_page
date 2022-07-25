import React from 'react'

import mp3  from '../img/mp3.png';
import tv  from '../img/tv.png';
import join  from '../img/join.png';

export function Joinus() {
    

    return (
        <>

        {/* store */}


        <section>
            <div className=' mt-20 mx-4 flex flex-col  justify-center md:flex-row md:space-x-40  md:space-y-20  md:mx-auto md:container'>

                        {/* mp3 store */}
                    <div className=' flex flex-col justify-center items-center space-y-4 drop-shadow-xl shadow-lg border-white p-10 rounded-3xl border-2 text-center md:p-20 md:mt-20 ' >

                        {/* image */}
                        <img src={mp3} alt="" className='' width='150px' />

                            {/* heading text */}
                        <h2 className='font-bold uppercase text-lg'>mp3 store</h2>

                        {/* links */}
                        <a href="#" className='text-primary_background capitalize '>visit store {'>>'}</a>
                    </div>


                        {/* tv store */}
                    <div className='flex flex-col justify-center items-center space-y-4 drop-shadow-xl shadow-lg border-white p-10 rounded-3xl border-2 text-center md:p-20 my-6 '>
                        {/* image  */}
                        <img src={tv} alt=""  width='150px'/>

                            {/* heading text */}
                        <h2 className='font-bold uppercase text-lg'>live streaming</h2>

                            {/* links */}
                        <a href="#" className='text-red-500 capitalize'>stream now{'>>'}</a>
                    </div>


                            {/* join us  */}
                    <div className='flex flex-col justify-center items-center space-y-4 drop-shadow-xl shadow-lg border-white p-10 rounded-3xl border-2 text-center md:p-20'>

                        {/* image */}
                        <img src={join} alt="" width='150px' />

                            {/* heading text */}
                        <h2 className='font-bold uppercase text-lg'>join us</h2>

                        {/* links */}
                        <a href="#" className='text-blue-500 capitalize'>join us{'>>'}</a>
                    </div>
            </div>
        </section>
            
        </>
    )
}
