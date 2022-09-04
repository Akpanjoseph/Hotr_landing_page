import React,{useState} from 'react'
import logo from '../img/logo.png'
import menu from '../img/menu-icon.png'
import HeroSection from './HeroSection'
import   fb from '../img/facebook.png'
import   twitter from '../img/twitter.png'
import   yb from '../img/youtube.png'
import   instargram from '../img/instargram.png'
import   header_img from '../img/header_img.png'
// import   message from '../img/message.png'

export function Header() {

// const [menu,setMenu] = useState('')
    return (
        <>
            {/* nav container */}
            <nav className='container relative  mx-auto'>

                <div className='flex justify-between px-4 py-4 shadow-lg md:hidden w-full '>
                   
                    <img src={fb} alt="" width={'20x'} />
                    <img src={twitter} alt="" width={'20x'}  />
                    <img src={yb} alt="" width={'20x'}  />
                    <img src={instargram} alt="" width={'20x'}  />

                    
                </div>

                {/* flex container  */}
                <div className="flex items-center  md:justify-between my-4 md:my-0">

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

                     {/* menu */}
                     <div className="md:hidden w-full flex justify-end mx-4">
                        <img src={menu} alt="" width={'30px'} />
                    </div>

                    <div>

                    </div>
                </div>
            </nav>

                {/* desktop */}
                <div className='hidden md:block'>
                    
                         <HeroSection  />
                </div>

         

            {/* status bar */}
            <section id='announcement' className='bg-primary_background md:mx-1 '>
                <div className='flex flex-col container mx-auto justify-center  py-4 md:flex-row md:justify-between  '>


                    <div className='flex  text-white space-x-4 justify-center items-center md:space-x-20 md:items-start md:justify-start '>
                        <div>
                            <p className='text-xs font-bold uppercase  sm:text-sm'>sunday services</p>
                            <h2 className='md:text-xl font-bold text-xs sm:text-md sm:text-md'>7:30am | 9:30am | 11:30am</h2>
                        </div>

                        <div>
                            <p className='text-xs font-bold uppercase sm:text-sm'>Wenesday</p>
                            <h2 className='md:text-xl font-bold text-xs sm:text-md'>5:00pm</h2>
                        </div>

                        <div>
                            <p className='text-xs font-bold uppercase sm:text-sm'>friday</p>
                            <h2  className='md:text-xl font-bold text-xs sm:text-md'>5:00pm</h2>
                        </div>
                    </div>


                    <div className='mt-4 justify-center items-center flex md:block'>
                        <a href="#" className='border-2 border-white text-primary_background bg-white rounded-full font-bold capitalize text-xs px-4  md:px-8 md:py-2 md:text-sm' > how we give {'>>'}</a>
                    </div>


                </div>


            </section>


            
        </>
    )
}
