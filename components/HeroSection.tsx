import React from 'react'
import FormsparkEmailCapture from './FormsparkEmailCapture'
import ParticlesContainer from './ParticlesContainer'

const HeroSection = () => {
  return (
    <div className=' flex min-h-screen flex-col gap-8 items-center justify-center '>
      <h1 className='text-4xl w-1/2 text-center'>Unlock AI's potential for your business. Drop your email; let's explore together.</h1>

        <div className='z-50'>
            <FormsparkEmailCapture />
        </div>

        
        <ParticlesContainer />



    </div>
  )
}

export default HeroSection
