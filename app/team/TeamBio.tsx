'use client'
import { Avatar } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import img from '../../public/homeLogos/desyncLandingLogo1.png'

interface TeamBioProps {
    name: string,
    title: string,
    subtitle: string,
    exp: string,
    desc: string,
    tool: string,
    toolNum: string,
}

const TeamBio: React.FC<TeamBioProps> = ({name, title, subtitle, exp, desc, tool, toolNum}) => {
    
    const imagePath = `/homeLogos/desyncLandingLogo${toolNum}.png`;
  
    return (
    <div className='w-1/3 flex flex-col text-3xl justify-start items-center gap-3'>

        <Avatar/>

        <h1 className='text-4xl font-bold'>{name}</h1>
        <h2 className='font-light'>{title}</h2>
        <h2 className='font-bold text-2xl'>{subtitle}</h2>
        <h2 className='font-light text-xl'>{exp}</h2>
        <h2 className='font-light text-xl'>{desc}</h2>
        {/* <h1 className='font-light text-xl'>{tool}</h1> */}
        <Image
            src={imagePath}
            width={100}
            height={100}
            alt=''
        />

    </div>
  )
}

export default TeamBio
