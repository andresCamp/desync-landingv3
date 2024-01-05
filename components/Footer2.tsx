import Image from 'next/image'
import React from 'react'
import logo from '../public/desync-logo-white.png'
import FooterSection2 from './FooterSection2'
import ParticlesContainer from './ParticlesContainer'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex flex-col px-20 gap-8 justify-between items-center z-50 bg-zinc-950'>
        <div className='p-8  flex flex-col sm:flex-row justify-evenly items-start'>
            
            
            
            <div className=' sm:w-3/12 text-sm p-3 sm:p-0'>
                <Link href={"/"} className='transition  ease-in duration-500 hover:opacity-75'>
                    <Image
                        src={logo}
                        alt='desycn logo'
                    />
                </Link>
                <p className='text-slate-300 font-thin'>
                Enter a World of Digital Ecosystems: AI-Driven Solutions to Fuel Your Success. Curiosity Meets Innovation. A World Where Visionaries Thrive.
    Intrigued by What&apos;s Possible?
                </p>
            </div>




            <div className='flex flex-row gap-16 py-3'>
            {/* <FooterSection 
                title="London."
                email="justin@desync.ai"
            /> */}

            <FooterSection2 
                title="South Bend."
                email="mark@desync.ai"
            />
            

        </div>
    </div>

        <hr className="border-t w-3/4 mx-8 border-slate-700"/>

        <p className='p-16 text-slate-700'>©2023 Desync. All rights reserved.</p>

        
      
    </div>
  )
}

export default Footer
