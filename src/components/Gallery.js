import React from 'react'

import img1 from '../img/img-1.png'
import img2 from '../img/img-2.png'
import img3 from '../img/img-3.png'
import img4 from '../img/img-4.png'
import img5 from '../img/img-5.png'
import img6 from '../img/img-6.png'
import img7 from '../img/img-7.png'

export function Gallery() {


    return (
        <>
            {/* title  */}

            <div className='text-center'>
                <p className='text-primary_background md:text-xl'>GALLERY</p>

                {/* sub header */}
                <h3 className='font-bold text-2xl md:text-5xl '>
                    Moments captured in Pictures
                </h3>

                {/* underline  */}
                <p ><span className='rounded-sm font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span> <span className=' font-extrabold py-0 text-primary_background text-3xl mx-2'> _____</span></p>

            </div>

            {/* gallery images  */}
           <div className='flex flex-row flex-wrap w-full mt-20 justify-center '>
          
                <img src={img1} alt="" className=''  />
                <img src={img1} alt=""  />
                <img src={img2} alt=""  />
                <img src={img3} alt=""  />
       
         
                <img src={img4} alt=""  />
                <img src={img5} alt=""  />
                <img src={img6} alt=""  />
                <img src={img7} alt=""  />
                <img src={img1} alt=""   />
                <img src={img1} alt=""  />
      
           </div>
        </>
    )
}
