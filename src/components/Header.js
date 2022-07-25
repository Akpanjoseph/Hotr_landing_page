import React from 'react'
import logo from '../img/logo.png'
import HeroSection from './HeroSection'

export function Header() {


    return (
        <>
            {/* nav container */}
            <nav className='container relative  mx-auto'>

                {/* flex container  */}
                <div className="flex items-center justify-between">

                    {/* logo */}
                    <div className="">
                        <img src={logo} alt="" />
                    </div>

                    {/*  links items  */}
                    <div className="hidden md:flex space-x-12 uppercase ">
                        <a href="#" className="hover:text-darkGrayishBlue "> Home</a>
                        <a href="#" className="hover:text-darkGrayishBlue "> Information center</a>
                        <a href="#" className="hover:text-darkGrayishBlue "> store</a>
                        <a href="#" className="hover:text-darkGrayishBlue "> give</a>
                        <a href="#" className="hover:text-darkGrayishBlue "> sermons</a>
                        <a href="#" className="hover:text-darkGrayishBlue "> join us</a>
                        <a href="#" className="text-lightRed "> stream live</a>
                    </div>

                    <div>

                    </div>
                </div>
            </nav>

                <div className='hidden md:block'>
                    
                         <HeroSection  />
                </div>

            {/* status bar */}
            <section id='announcement' className='bg-primary_background mx-1 '>
                <div className='flex flex-col container mx-auto  py-4 md:flex-row justify-between  '>
                    <div className='flex  text-white space-x-4 justify-center items-center md:space-x-20 md:items-start md:justify-start '>
                        <div>
                            <p className='text-sm font-bold uppercase'>sunday services</p>
                            <h2 className='md:text-xl font-bold text-sm'>7:30am | 9:30am | 11:30am</h2>
                        </div>

                        <div>
                            <p className='text-sm font-bold uppercase'>Wenesday</p>
                            <h2 className='md:text-xl font-bold text-sm'>5:00pm</h2>
                        </div>

                        <div>
                            <p className='text-sm font-bold uppercase'>friday</p>
                            <h2  className='md:text-xl font-bold text-sm'>5:00pm</h2>
                        </div>
                    </div>


                    <div className='mt-4 justify-center items-center flex md:block'>
                        <a href="#" className='border-2 border-white text-primary_background bg-white rounded-full font-bold capitalize text-sm px-4  md:px-8 md:py-2' > how we give {'>>'}</a>
                    </div>


                </div>


            </section>


            
        </>
    )
}
