import Image from 'next/image'
import React from 'react'
import GetStartedButton from './buttons/GetStartedButton'

interface ServiceCardTypes {
    src: string,
    title: string,
    desc: string,
    link: string
}

const ServiceCard: React.FC<ServiceCardTypes> = ({src, title, desc, link}) => {
  return (
    <div className='flex flex-col w-80 h-80 gap-6 text-center justify-center items-center p-4 bg-slate-900'>
        <Image
            src={src}
            alt={title}
            width={200}
            height={200}
        />
        <div>
            <h3 className='text-2xl'>{title}</h3>
            <p className='font-sans  font-light'>{desc}</p>
        </div>
    </div>
  )
}

export default ServiceCard
