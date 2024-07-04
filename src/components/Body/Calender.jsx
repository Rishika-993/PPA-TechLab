import React from 'react'
import Img from '../../assets/Body/Calender/pana.png'


function Calender() {
  return (
    <div className='lg:mx-28'>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className='lg:px-16 lg:w-1/2'>
                <img src={Img} alt="Unlock" className='w-110 h-82 px-10 mx-auto lg:mx-0 lg:px-0' />
            </div>
            <div className='px-20 lg:px-0 md:px-32 flex flex-col flex-wrap lg:w-1/2 lg:py-20'>
                <div className='space-y-2 md:space-y-4 lg:pr-20 font-inter'>
                    <h2 className='text-[#4D4D4D] text-center lg:text-left pt-4 lg:pt-0 text-2xl font-medium md:text-4xl md:font-semibold'>How to design your site footer like we did</h2>
                    <p className='text-[#717171] text-center lg:text-left text-sm sm:text-base'>Donec a eros justo. Fusce egestas tristique ultrices.
                         Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. 
                         Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. 
                         Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. 
                         Integer in nisi eget nulla commodo faucibus efficitur quis massa. 
                         Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. 
                        Donec consectetur faucibus ipsum id gravida.</p>

                </div>
                <div className='mx-auto lg:mx-0 pb-4 lg:pb-0'>
                    <button className="bg-[#4CAF4F] text-white px-5 py-2 text-sm md:text-base md:px-8 md:py-3 rounded mt-5 md:max-w-50">Learn More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calender

