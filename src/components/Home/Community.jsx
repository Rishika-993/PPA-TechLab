import React from 'react'
import I1 from '../../assets/CommunityIcon/Icon.svg'
import I2 from '../../assets/CommunityIcon/Icon-1.svg'
import I3 from '../../assets/CommunityIcon/Icon-2.svg'

function Community() {
  return (
    <div className='my-10'>
      <div className='px-10 lg:px-40 flex flex-col flex-wrap items-center'>
      <div className='space-y-2'>
        <h1 className='text-[#4D4D4D] text-center text-2xl px-10 md:px-20 lg:px-80 font-medium md:text-4xl md:font-semibold'>Manage your entire community in a single system</h1>
        <p className='text-[#717171] text-center text-sm sm:text-base'>Who is Nextcent suitable for?</p>
      </div>
      </div>

      <div className='my-10 flex flex-col lg:flex-row px-20 md:px-60 lg:px-40 space-y-10 lg:space-y-0 lg:space-x-32'>
        <div className='flex flex-col items-center  space-y-2 shadow-md rounded py-10 lg:px-10 ' style={{ boxShadow: '0px 4px 6px rgba(171, 190, 209, 0.2)' }}>
          <img src={I1} alt="Icon" className='w-8 h-8 md:w-12 md:h-12 mx-auto' />
          <h2 className='text-[#4D4D4D] text-center text-2xl font-medium md:text-4xl md:font-semibold'>Membership Organisations</h2>
          <p className='text-[#717171] text-center text-xs'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className='flex flex-col items-center  space-y-2 shadow-md rounded py-10 lg:px-10' style={{ boxShadow: '0px 4px 6px rgba(171, 190, 209, 0.2)' }}>
          <img src={I2} alt="Icon" className='w-8 h-8 md:w-12 md:h-12 mx-auto' />
          <h2 className='text-[#4D4D4D] text-center text-2xl font-medium md:text-4xl md:font-semibold'>National Associations</h2>
          <p className='text-[#717171] text-center text-xs'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className='flex flex-col items-center  space-y-2 shadow-md rounded py-10 lg:px-10' style={{ boxShadow: '0px 4px 6px rgba(171, 190, 209, 0.2)' }}>
          <img src={I3} alt="Icon" className='w-8 h-8 md:w-12 md:h-12 mx-auto' />
          <h2 className='text-[#4D4D4D] text-center text-2xl font-medium md:text-4xl md:font-semibold'>Clubs And Groups</h2>
          <p className='text-[#717171] text-center text-xs'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
    </div>
  )
}

export default Community
