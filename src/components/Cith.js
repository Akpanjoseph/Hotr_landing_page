import React from 'react'

export function Cith() {


    return (
        <div id='welcome-bg2' className='my-40'>

            <div className='container mx-auto text-center flex flex-col justify-center items-center w-full h-full'>

                {/* section header */}
                <h5 className='text-primary_background font-bold text-2xl md:text-2xl'>The CITH System</h5>

                {/* section sub header */}
                <h1 className='text-white font-extrabold text-3xl md:text-5xl md:mt-6'>Church in the Home</h1>

                {/* underline */}
                <p ><span className='rounded-sm font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span> <span className=' font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span></p>

                {/* section text */}
                <div className='flex flex-col items-center justify-center text-white space-y-6 px-2 mt-5 md:px-0 md:mt-10 md:space-y-12'>

                    {/* text  */}
                    <p className=' text-center tracking-wide leading-loose text-lg md:max-sm md:w-1/2'>
                        The CITH system is the Church at the micro or cellular level
                        where everybody can be somebody. It is where a strong sense of
                        belonging is developed. It is the first line of defense. Where you
                        are known by name and you know others by name. It is the family
                        cell system.
                    </p>

                </div>


                {/* join us section */}
                <div className='my-10 md:my-20'>

                    {/* join us text */}
                    <p className='bg-primary_background  text-white rounded-full font-bold px-20 py-2 md:px-20 md:py-4'>
                        <a href="#">See CITH Center Near You</a>
                    </p>

                </div>
            </div>
        </div>
    )
}
