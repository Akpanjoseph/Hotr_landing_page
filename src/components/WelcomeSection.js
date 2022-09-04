import React from 'react'

export function WelcomeSection() {
    

    return (
        <div id='welcome-bg1' className='my-40 py-[40px] md:py-[5%]'>

            <div className='container mx-auto text-center flex flex-col justify-center items-center w-full h-full'>

                {/* section header */}
                <h5 className='text-primary_background font-bold text-2xl md:text-2xl'>Welcome</h5>

                {/* section sub header */}
                <h1 className='text-white font-extrabold text-2xl md:text-5xl md:mt-6'>You are Welcome Here!</h1>

                {/* underline */}
                <p ><span className='rounded-sm font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span> <span className=' font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span></p>

                {/* section text */}
                <div className='flex flex-col items-center justify-center text-white px-2 space-y-4 mt-5 md:px-0 md:mt-10 md:space-y-12'>

                    {/* text  */}
                    <p className=' text-center tracking-normal leading-loose text-lg md:max-sm md:w-1/2 md:tracking-wide md:leading-loose'>
                    House On The Rock is a vibrant, multi-ethnic church, with over 7,000 worshippers on Sunday mornings and several daughter churches spread over Africa and Europe.  
                    </p>
                    

                    {/* text  */}
                    <p className='text-center tracking-wide leading-relaxed text-lg  md:max-sm md:w-1/2 '>
                    We believe in the power of God's word to change lives and value the practical application of His word to make a difference in who we are and what we do.
  
                    </p>
                    

                    {/* text  */}
                    <p className='text-center tracking-normal leading-loose text-lg md:max-sm md:w-1/2 md:tracking-wide md:leading-loose '>
                    Believing and obeying His message leads us in a discovery of real life and a hope for eternity. This is what the Bible teaches us, that Jesus Christ came as God's gift to the world with a message of good news.  
                    </p>

                </div>


                    {/* join us section */}
                <div className=' my-10 md:my-20 '>
                    
                    {/* join us text */}
                <p className='bg-primary_background  text-white rounded-full font-bold  px-10 py-2 md:px-20 md:py-4 sm:px-20'>
                    <a href="#">W’ll like to meet you</a>
                </p>

                </div>
            </div>
        </div>
    )
}
