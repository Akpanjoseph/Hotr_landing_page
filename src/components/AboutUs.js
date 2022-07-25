import React from 'react';
import pst1 from '../img/pst-1.png'

export function AboutUs() {


    return (
        <>
            {/* about us */}

            <section id='aboutus'>
                {/* container */}

                <div className='container mx-auto flex flex-col-reverse text-center justify-center items-center space-y-20 mb-36 md:flex-row-reverse md:justify-around md:text-start '>

                    <div className='mt-10 md:max-w-3xl md:mt-20'>

                        {/* section header */}
                        <p className='text-primary_background md:text-xl'>ABOUT US</p>

                            {/* section sub header */}
                        <h3 className='font-bold text-4xl md:text-5xl '> <span className='border-b-4 border-primary_background rounded-sm ' >W</span> <span className='border-b-4 border-primary_background rounded-sm '>h</span>o We are</h3>

                        {/* body */}
                        <div className='mt-6 leading-loose px-4'>
                            <p>
                                House On The Rock is a vibrant, multi-ethnic church, with over 7,000 worshippers on Sunday mornings and several daughter churches spread over Africa and Europe.
                            </p>

                            <p className='py-4'>
                                We believe in the power of God's word to change lives and value the practical application of His word to make a difference in who we are and what we do.
                            </p>

                            <p>

                                Believing and obeying His message leads us in a discovery of real life and a hope for eternity. This is what the Bible teaches us, that Jesus Christ came as God's gift to the world with a message of good news.
                            </p>

                                {/* link */}
                            <p className='py-4 text-primary_background'>
                                <a href="#">Read More {'>>'}</a>
                            </p>
                        </div>
                    </div>

                        {/* section image */}
                    <div className='max-w-xs md:max-w-md'>
                        <img src={pst1} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}
