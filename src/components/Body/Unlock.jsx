import React from 'react'
import Img from '../../assets/Body/unlock/Frame 35.svg'

function Unlock() {
  return (
    <div className='lg:mx-28'>
        <div className='flex flex-col lg:flex-row lg:justify-between'>
            <div className='lg:px-16 lg:w-1/2'>
                <img src={Img} alt="Unlock" className='w-110 h-82 px-10 mx-auto lg:mx-0 lg:px-0' />
            </div>
            <div className='px-20 lg:px-0 md:px-32 flex flex-col flex-wrap lg:w-1/2 lg:py-20'>
                <div className='space-y-2 md:space-y-4 lg:pr-20 font-inter'>
                    <h2 className='text-[#4D4D4D] text-center lg:text-left text-2xl font-medium md:text-4xl md:font-semibold'>The unseen of spending three years at Pixelgrade</h2>
                    <p className='text-[#717171] text-center lg:text-left text-sm sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
                    Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.
                    Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
                    Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Unlock
