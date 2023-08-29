import React from 'react'
import ServiceCard from './ServiceCard'
import GetStartedButton from './buttons/GetStartedButton'

const MicroservicesSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 my-16'>
        
        <div className='flex flex-col justify-center items-center'>
            <h3 className='text-3xl font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                Microservices
            </h3>

            <h2 className='text-6xl'>
            Breathe life into your business.
            </h2>

            <p className='text-lg font-sans font-light'>From Web Development to Sales Automation, We Have Solutions for Your Problems. Find Your Perfect Match.</p>
        </div>

        <div className='flex flex-row gap-12'>
            <ServiceCard 
                src='/homeLogos/desyncLandingLogo15.png'
                title='Data & Analytics'
                desc='Turn data into actionable insights for informed decision-making.'
                link='/de/SME'
            />
            
            <ServiceCard 
                src='/homeLogos/desyncLandingLogo11.png'
                title=' Automation & Integration'
                desc='Streamline workflows and integrate systems for optimal efficiency.'
                link='/de/SME'
            />
            
            <ServiceCard 
                src='/homeLogos/desyncLandingLogo8.png'
                title='Content & Consulting'
                desc='Elevate brand presence and expertise through targeted content and consulting.'
                link='/de/SME'
            />

            
        </div>

        <GetStartedButton/>

    </div>
  )
}

export default MicroservicesSection
