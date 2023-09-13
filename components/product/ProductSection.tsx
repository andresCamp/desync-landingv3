'use client'

import React from 'react'
import ProductCard from './ProductCard'

const ProductSection = () => {
  return (
    <div className='flex h-screen flex-row gap-8'>

      <ProductCard
        title="EchoNet"
        subtitle="Meeting Analysis + Internal LLM"
        src=""
        link=""
      />
      
      <ProductCard
        title="EchoSync"
        subtitle="Meeting Analysis + Internal LLM"
        src=""
        link=""
      />
      
    </div>
  )
}

export default ProductSection
