import React from 'react'
import V1 from '../../assets/Body/Achievements/vector.png'
import V2 from '../../assets/Body/Achievements/Vector-1.png'
import V3 from '../../assets/Body/Achievements/Vector-2.svg'
import V4 from '../../assets/Body/Achievements/Vector-3.svg'
import { useEffect } from "react";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


function Achievements() {

  const [counterOn, setCounterOn] = React.useState(false);

  return (
    <div className='px-5 py-10 bg-[#F5F7FA] lg:px-40 mt-10 '>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex flex-col space-y-2 px-20 lg:w-1/2 lg:py-16'>
          <h2 className= "text-[#4D4D4D] text-center lg:text-left text-2xl font-inter font-medium md:text-4xl md:font-semibold">Helping a local <br></br><span className="text-[#4CAF4F]"> business reinvent itself  </span></h2>
          <p className='text-[#18191F] text-center lg:text-left font-inter text-sm lg:text-base'>We reached here with our hard work and dedication</p>
        </div>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      <div className='flex flex-col mx-auto my-10 space-y-4 md:space-y-10 '>
        <div className='flex flex-row space-x-4 md:space-x-20'>
        <div className='flex flex-row space-x-4 items-center'>
            <div className=''>
              <img src={V1} alt="Vector" />
            </div>
            <div className='flex flex-col font-inter'>
              <div className="count-number text-lg md:text-2xl font-bold text-[#4D4D4D]">
                {counterOn && <CountUp start={0} end={2245341} duration={4} delay={0}/>}
              </div>
              <p className='text-[#717171] text-base'>Members</p>
            </div>
        </div>
        <div className='flex flex-row space-x-4 items-center'>
            <div className=''>
              <img src={V1} alt="Vector" />
            </div>
            <div className='flex flex-col font-inter'>
              <div className="count-number text-lg md:text-2xl font-bold text-[#4D4D4D]">
              {counterOn && <CountUp start={0} end={46328} duration={4} delay={0}/>}
              </div>
              <p className='text-[#717171] text-base'>Clubs</p>
            </div>
        </div>
        </div>
        <div className='flex flex-row space-x-4 md:space-x-20'>
        <div className='flex flex-row space-x-4 items-center'>
            <div className=''>
              <img src={V3} alt="Vector" />
            </div>
            <div className='flex flex-col font-inter'>
              <div className="count-number text-lg md:text-2xl font-bold text-[#4D4D4D]">
              {counterOn && <CountUp start={0} end={828867} duration={4} delay={0}/>}
              </div>
              <p className='text-[#717171] text-base'>Event Bookings</p>
            </div>
        </div>
        <div className='flex flex-row space-x-4 items-center'>
            <div className=''>
              <img src={V4} alt="Vector" />
            </div>
            <div className='flex flex-col font-inter'>
              <div className="count-number text-lg md:text-2xl font-bold text-[#4D4D4D]">
              {counterOn && <CountUp start={0} end={1926436} duration={4} delay={0}/>}
              </div>
              <p className='text-[#717171] text-base'>Payments</p>
            </div>
        </div>
        </div>
      </div>
      </ScrollTrigger> 
        
      </div>
    </div>
  )
}

export default Achievements
