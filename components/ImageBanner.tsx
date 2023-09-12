'use client'
import Image from 'next/image'
import React from 'react'
import { StaticImageData } from "next/image"

interface ImageBannerProps {
    img: StaticImageData;
    title: string;
    subtitle: string;
}

const ImageBanner: React.FC<ImageBannerProps> = ({img, title, subtitle}) => {
  return (
    <div>
      <div className='relative w-full'>

        <Image
            src={img}
            width={2500}
            alt=''
            objectFit='contain'
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-light">
            <h1 className="text-6xl bg-opacity-95 bg-stone-100 p-4 rounded-2xl font-bold shadow-lg">
            {title}
            </h1>

            <p className="mt-5 text-xl font-sans text-center">
                {subtitle}
            </p>
        </div>

      </div>
    </div>
  )
}

export default ImageBanner