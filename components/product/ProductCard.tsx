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
        <Card className="col-span-12 sm:col-span-4  shadow-lg">
            <CardHeader className="absolute z-10 bottom-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">{subtitle}</p>
                <h4 className="text-white font-medium text-4xl">{title}</h4>
            </CardHeader>
            
            <Link 
                href={link} 
                className="z-0 w-full h-full"
            >
                <Image
                    isZoomed
                    removeWrapper
                    alt="Card background"
                    className="z-0 h-full object-cover hover:brightness-110"
                    src={src}
                />
            </Link>
        </Card>
    </div>
  )
}

export default ProductCard
