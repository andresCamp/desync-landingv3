import Image from 'next/image'
import React from 'react'
import logo from '../public/desync-logo-white.png'
import FooterSection from './FooterSection'

const Footer = () => {
  return (
    <div className='flex flex-col gap-8 justify-center items-center z-50'>
        <div className='p-8 gap-16 flex flex-row justify-center items-start'>
            <div className='w-1/5 text-sm'>
                <Image
                    src={logo}
                    alt='desycn logo'
                />
                <p className='text-slate-300 font-thin'>
                Enter a World of Digital Ecosystems: AI-Driven Solutions to Fuel Your Success. Curiosity Meets Innovation. A World Where Visionaries Thrive.
    Intrigued by What&apos;s Possible?
                </p>
            </div>

            <div className='flex flex-row gap-16 py-3'>
            <FooterSection 
                title="Microservices"
                options={["Features", "Offerings"]}
            />
            <FooterSection 
                title="Digital Ecosystem"
                options={["How it Works", "Explore", "Schedule Intro"]}
            />
            <FooterSection 
                title="Learn More"
                options={["Blog", "Portfolio", "Newsletter"]}
            />
            <FooterSection 
                title="Pages"
                options={["Terms & Conditions", "Privacy Policy", "Refund Policy"]}
            />

            </div>
    </div>

        <div>

        </div>

        <hr className="border-t w-3/4 mx-8 border-slate-700"/>

        <p className='p-16 text-slate-700'>©2023 Desync. All rights reserved.</p>
      
    </div>
  )
}

export default Footer
