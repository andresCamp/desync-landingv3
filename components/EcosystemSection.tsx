import React from 'react'
import ServiceCard from './ServiceCard'
import GetStartedButton from './buttons/GetStartedButton'

const EcosystemSection = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 my-8'>
        
        <div className='flex flex-col justify-center text-center items-center'>
            <h3 className='text-3xl text-center selection:font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
                Digital Ecosystem
            </h3>

            <h2 className='text-center text-6xl'>
                Unleash your Potential.
            </h2>

            <p className='text-lg font-sans font-light'>Dive into Our Digital Ecosystems. A Symphony of Services Tailored for You. Fast, Efficient, Impactful</p>
        </div>

        <div className='flex flex-col md:flex-row gap-12'>
            <ServiceCard 
                src='/homeLogos/desyncLandingLogo9.png'
                title='SME'
                desc='Transform with AI-driven education.'
                link='/de/SME'
            />
            
            <ServiceCard 
                src='/homeLogos/desyncLandingLogo9.png'
                title='Start Up'
                desc='Transform with AI-driven education.'
                link='/de/SME'
            />
            
            <ServiceCard 
                src='/homeLogos/desyncLandingLogo9.png'
                title='Product Launch'
                desc='Transform with AI-driven education.'
                link='/de/SME'
            />

            
        </div>

        <GetStartedButton/>

    </div>
  )
}

export default EcosystemSection
