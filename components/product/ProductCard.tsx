'use client'
import { Card, CardHeader, Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

interface ProductCardTypes {
    title: string,
    subtitle: string,
    src: string,
    link: string,
}

const ProductCard: React.FC<ProductCardTypes> = ({title, subtitle, src, link}) => {
  return (
    <div>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{subtitle}</p>
        <h4 className="text-white font-medium text-large">{title}</h4>
      </CardHeader>
      <Link href="/" 
      
      className="z-0 w-full h-full object-cover hover:brightness-110"
      
      >
        <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover hover:brightness-110"
            src="/services/llm.png"
        />
      </Link>
    </Card>
    </div>
  )
}

export default ProductCard
