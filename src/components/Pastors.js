import React from 'react'

import ed from '../img/ps-ed.png'
import paul from '../img/paul_ad.png'

export function Pastors() {


    return (
        <>
            {/* pastors section */}
            <section id='pastors' className='mt-10'>

                {/* title  */}

                <div className='text-center'>
                    <p className='text-primary_background md:text-xl'>PASTORS</p>

                    {/* sub header */}
                    <h3 className='font-bold text-4xl md:text-5xl '>
                        Meet Our Pastors
                    </h3>

                    {/* underline  */}
                    <p ><span className='rounded-sm font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span> <span className=' font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span></p>

                </div>

                {/* body */}
                <div className=' container mx-auto flex flex-col justify-around items-center space-y-20 md:space-x-20 md:flex-row  '>

                    <div className='mt-4'>
                        {/* pastor image */}
                        <div className='max-w-xs md:max-w-md'>
                            <img src={paul} alt="" />
                        </div>
                        <div>
                            <div className='mx-4 text-2xl'>
                                <h2>PASTOR PAUL & IFEANYI</h2>
                                <h1 className='font-bold'>ADEFARASIN</h1>
                            </div>

                            <div className='max-w-xs md:max-w-lg text-justify mt-5 leading-relaxed text-text_color '>
                                <p>
                                    An author, motivator and conference speaker. Paul Adefarasin is one of the most respected and sought after ministers in Nigeria. He is widely regarded as a visionary leader and bridge-builder. His ability to transcend Race, Tribe and Creed with his unique approach to ministry has seen to the forging of many strategic relationships between the Church and secular communities in Africa.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        {/* pastor image */}
                        <div className='max-w-xs md:max-w-md'>
                            <img src={ed} alt="" />
                        </div>

                        <div>
                            <div className='mx-4 text-2xl'>
                                <h2>PASTOR EDWIN & SONIA</h2>
                                <h1 className='font-bold'>BIAYEIBO</h1>
                            </div>

                            <div className='max-w-xs md:max-w-lg text-justify mt-5 leading-relaxed text-text_color'>
                                <p>
                                Here in Enugu, we are blessed with one of the finest and prolific teachers of the word, Rev. Edwin Biayeibo, as the resident Pastor. He is the founder of the much celebrated Wisdom for Winning devotional, the convener of Ignite with ED (IGWE) Conference, touching lives all over the globe. He is married to Sonia Edwin Biayeibo, an economist by proffesion, and they are blessed with 6 children
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
