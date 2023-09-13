import React from 'react'
import FormsparkEmailCapture from './hero/FormsparkEmailCapture'
import ParticlesContainer from './ParticlesContainer'
import Image from 'next/image'
// import img from '../public/smokeBg1.png'
import img from '../public/imgBanner1.png'
import ImageBanner from './ImageBanner'

interface CTAProps {
  title: string,
  subtitle: string,
}

const CTA: React.FC<CTAProps> = ({title, subtitle}) => {
  return (
  <div className=''>
      <div className='relative w-full'>
        <Image 
            className=' w-screen blur-sm'
            src={img}
            width={1000}
            height={1000}
            alt='desync bg'
        />


        <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-light">
            <h1 className="text-6xl  p-4 rounded-2xl font-bold">
            {title}
            </h1>
            <h3 className="text-xl  p-4 rounded-2xl font-light">
            {subtitle}
            </h3>
 

        <FormsparkEmailCapture/>

            <p className="mt-5 text-xl font-sans text-center">
            </p>
        </div>

      </div>
    </div>

  )
}

export default CTA
