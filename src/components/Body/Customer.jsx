import React from 'react'
import Icon1 from '../../assets/ClientLogo/Logo-1.svg'
import Icon2 from '../../assets/ClientLogo/Logo -2.svg'
import Icon3 from '../../assets/ClientLogo/Logo -3.svg'
import Icon4 from '../../assets/ClientLogo/Logo-4.svg'
import Icon5 from '../../assets/ClientLogo/Logo -5.svg'
import Icon6 from '../../assets/ClientLogo/Logo-6.svg'
import TeslaLogo from '../../assets/Body/Customer/tesla.png'

function Customer() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-[#F5F7FA] p-6 rounded-lg shadow-lg space-y-6 lg:space-y-0 lg:space-x-6 lg:px-40">
      <div className="flex-shrink-0">
        <img src={TeslaLogo} alt="Tesla" className="w-80 h-80" />
      </div>
      <div className="flex-grow">
        <p className="text-gray-600 px-5 md:py-0">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
        </p>
        <div className="mt-4 px-5">
          <p className="text-green-600 font-semibold">Tim Smith</p>
          <p className="text-gray-600">British Dragon Boat Racing Association</p>
        </div>
        <div className="flex mt-4 space-x-4 md:justify-between px-5">
          <img src={Icon1} className='w-6 h-6 md:w-12 md:h-12' />
          <img src={Icon2} className='w-6 h-6 md:w-12 md:h-12' />
          <img src={Icon3} className='w-6 h-6 md:w-12 md:h-12' />
          <img src={Icon4} className='w-6 h-6 md:w-12 md:h-12' />
          <img src={Icon5} className='w-6 h-6 md:w-12 md:h-12' />
          <img src={Icon6} className='w-6 h-6 md:w-12 md:h-12' />
        <a href="/customers" className="text-green-600 hover:underline md:text-xl md:pt-2 md:font-semibold">Meet all customers &rarr;</a>

        </div>
      </div>
      <div className="flex-shrink-0">
      </div>
    </div>
  )
}

export default Customer
