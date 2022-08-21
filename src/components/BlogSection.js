import React from 'react'

import blog_img from '../img/pst-2.png'

export function BlogSection() {


    return (
        <>

            {/* title  */}

            <div className='text-center'>
                <p className='text-primary_background md:text-xl'>BLOG</p>

                {/* sub header */}
                <h3 className='font-bold text-2xl md:text-5xl '>
                    Mesaage from our Blog
                </h3>

                {/* underline  */}
                <p ><span className='rounded-sm font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span> <span className=' font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span></p>

            </div>

            {/* Programs */}
            <div className='  container mx-auto  flex-col space-y-10 justify-center items-center  text-black font-bold my-20 md:flex-row md:space-x-20 md:flex'>

                {/* post1 */}
                <div className='shadow-lg max-w-lg text-justify mt-5 mx-2 md:mx-0 md:w-[30%]'>
                    <img src={blog_img} alt="" className='w-[100%]' />

                    <div className='mx-4'>
                        <p className='text-primary_background font-normal my-2'>FEB 20, 2022 ADMIN</p>

                        <div className='max-sm font-light text-2xl my-2'>
                            <h1>
                                Building a Holy &
                            </h1>
                            <h1>
                                Healthy Home in Christ
                            </h1>
                        </div>


                        <div className='font-light text-left my-8 text-gray-500 '>
                            <p className=''> Microdermabrasion beauty supplements nutrient dense healthy blood sugar daily rituals for divine.</p>
                        </div>

                        <div className='my-5' >
                            <a href="#" className='underline text-lg text-primary_background font-normal '>Read More {'>>'}</a>
                        </div>
                    </div>
                </div>


                {/* post2 */}

                <div className='shadow-lg  max-w-lg text-justify mt-5 mx-2 md:mx-0 md:w-[30%]'>
                    <img src={blog_img} alt="" className='w-[100%]' />

                    <div className='mx-4'>
                        <p className='text-primary_background font-normal my-2'>FEB 20, 2022 ADMIN</p>

                        <div className='max-sm font-light text-2xl my-2'>
                            <h1>
                                Building a Holy &
                            </h1>
                            <h1>
                                Healthy Home in Christ
                            </h1>
                        </div>


                        <div className='font-light text-left my-8 text-gray-500 '>
                            <p className=''> Microdermabrasion beauty supplements nutrient dense healthy blood sugar daily rituals for divine.</p>
                        </div>

                        <div className='my-5' >
                            <a href="#" className='underline text-lg text-primary_background font-normal '>Read More {'>>'}</a>
                        </div>
                    </div>
                </div>



                {/* post3 */}
                <div className='shadow-lg max-w-lg text-justify mt-5 mx-2 md:mx-0 md:w-[30%]'>
                    <img src={blog_img} alt="" className='w-[100%]' />

                    <div className='mx-4'>
                        <p className='text-primary_background font-normal my-2'>FEB 20, 2022 ADMIN</p>

                        <div className='max-sm font-light text-2xl my-2'>
                            <h1>
                                Building a Holy &
                            </h1>
                            <h1>
                                Healthy Home in Christ
                            </h1>
                        </div>


                        <div className='font-light text-left my-8 text-gray-500 '>
                            <p className=''> Microdermabrasion beauty supplements nutrient dense healthy blood sugar daily rituals for divine.</p>
                        </div>

                        <div className='my-5' >
                            <a href="#" className='underline text-lg text-primary_background font-normal '>Read More {'>>'}</a>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
