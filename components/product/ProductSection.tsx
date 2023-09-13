'use client'
import React from 'react'
import ProductCard from './ProductCard'
import Image from 'next/image'
import waves from '../../public/waves3.png'

const ProductSection = () => {
  return (
    <div className='px-6 my-32 gap-8 sm:gap-0 flex  w-screen flex-col justify-center items-center'>
      
      <div className='flex flex-col gap-3 sm:items-center'>
        <h3 className='text-3xl font-bold '>
          Our Ecosystems
        </h3>
        
        <h3 className=' text-5xl leading-tight sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-300'>
          Groudbreaking Integrations
        </h3>

        <p className='text-2xl sm:text-lg font-light'>Powerful service bundles add instant value to your operations</p>
      </div>


      <div className='w-screen p-8 sm:p-16 grid sm:grid-cols-3 gap-8'>
        <ProductCard
          title="EchoNet"
          subtitle="Meeting Analysis + Internal LLM"
          src="/echosync.png"
          link="/ecosystem/echosync"
        />
       
      </div>

      
      
    </div>
  )
}

export default ProductSection
