import React from 'react'
import ServiceCard from './ServiceCard'
import ServiceTest2 from './ServiceTest2'
import Image from 'next/image'


const ServicesSection = () => {
  return (
    <div className='relative h-full mt-32 px-8 xl:px-32 snap-center flex flex-col justify-center'>
     
      
      <div className='flex flex-col gap-3 justify-center sm:items-center'>
            <h3 className='text-3xl font-bold '>
                Our Services
            </h3>
            {/* <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                Our Services
              </h3> */}

            <h3 className='text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Breathe life into your business.
            </h3>

            <h2 className='text-6xl '>
            </h2>

            <p className='text-2xl sm:text-lg font-light'>From Web Development to Sales Automation, We Have Solutions for Your Problems. Find Your Perfect Match.</p>
        </div>

        <div className='my-8 flex justify-center'>
            <ServiceTest2 />
        </div>

        
    </div>
  )
}

export default ServicesSection
