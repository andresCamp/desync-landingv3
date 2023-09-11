import React from 'react'
import ServiceCard from './ServiceCard'
import ServiceTest2 from './ServiceTest2'

const ServicesSection = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center'>
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                Our Services
            </h3>

            <h2 className='text-6xl '>
            Breathe life into your business.
            </h2>

            <p className='text-lg font-light'>From Web Development to Sales Automation, We Have Solutions for Your Problems. Find Your Perfect Match.</p>
        </div>

        <div className='px-8 flex justify-center'>


            {/* <ServiceCard /> */}

            <ServiceTest2 />



        </div>





    </div>
  )
}

export default ServicesSection
