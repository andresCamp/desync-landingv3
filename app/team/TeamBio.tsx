'use client'
import { Avatar } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import img from '../../public/homeLogos/desyncLandingLogo1.png'
import Link from 'next/link'

interface TeamBioProps {
    name: string,
    src: string,
    title: string,
    subtitle: string,
    exp: string,
    desc: string,
    linkedIn: string,
    tool: string,
    toolNum: string,
}

const TeamBio: React.FC<TeamBioProps> = ({name, src, title, subtitle, exp, desc, linkedIn, tool, toolNum}) => {
    
    const imagePath = `/homeLogos/desyncLandingLogo${toolNum}.png`;
  
    return (
    <div className='w-1/3 flex flex-col text-3xl justify-start items-center gap-3'>

        <Avatar
            src={src}
            size='lg'
            className="w-36 h-36 text-large"
        />

        <h1 className='text-4xl font-bold flex flex-row items-center gap-3'>
            {name}
            <span>
                <a href={linkedIn} className=' hover:brightness-125 ' target="_blank">
                    <Image
                        src={"/homeLogos/desyncLandingLogo33.png"}
                        className='hover:scale-125'
                        width={40}
                        height={100}
                        alt=''
                    />
                </a>
            </span>
        </h1>
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
