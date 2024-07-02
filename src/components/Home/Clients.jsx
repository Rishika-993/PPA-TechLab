import React from 'react'
import L1 from '../../assets/ClientLogo/Logo-1.svg'
import L2 from '../../assets/ClientLogo/Logo -2.svg'
import L3 from '../../assets/ClientLogo/Logo -3.svg'
import L4 from '../../assets/ClientLogo/Logo-4.svg'
import L5 from '../../assets/ClientLogo/Logo -5.svg'
import L6 from '../../assets/ClientLogo/Logo-6.svg'
import L7 from '../../assets/ClientLogo/Logo -7.svg'


function Clients() {
  return (
    <div className='mt-10'>
      <div className='px-10 lg:px-40 flex flex-col flex-wrap items-center'>
      <div className='space-y-2'>
        <h1 className='text-[#4D4D4D] text-center text-2xl font-medium md:text-4xl md:font-semibold'>Our Clients</h1>
        <p className='text-[#717171] text-center text-sm sm:text-base'>We have been working with some Fortune 500+ clients</p>
      </div>
      </div>
      <div className='flex flex-row flex-wrap space-x-8 md:justify-between items-center px-10 py-5 lg:px-40'>
        <img src={L1} alt="Logo" className='w-8 h-8 md:w-12 md:h-12 mx-5 my-5' />
        <img src={L2} alt="Logo" className='w-8 h-8 md:w-12 md:h-12 mx-5 my-5' />
        <img src={L3} alt="Logo" className='w-8 h-8 md:w-12 md:h-12 mx-5 my-5' />
        <img src={L4} alt="Logo" className='w-8 h-8 md:w-12 md:h-12 mx-5 my-5' />
        <img src={L5} alt="Logo" className='w-8 h-8 md:w-12 md:h-12 mx-5 my-5' />
        <img src={L6} alt="Logo" className='w-8 h-8 md:w-12 md:h-12 mx-5 my-5' />
        <img src={L7} alt="Logo" className='w-8 h-8 md:w-12 md:h-12 mx-5 my-5' />

      </div>
    </div>
  )
}

export default Clients
