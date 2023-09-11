'use client'
import React, { useRef } from 'react'
import FormsparkEmailCapture from './FormsparkEmailCapture'
import ParticlesContainer from '../ParticlesContainer'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

const HeroSection = () => {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress} = useScroll({
        target: ref,
        offset: ["1 0" ,"1 1"]
    })


    const sacleProgress = useTransform(scrollYProgress, [1 , 0], [1, 0.25])
    const opacityProgress = useTransform(scrollYProgress, [1 , 0], [1, 0])


  return (
    <motion.section 
        ref={ref} 
        style={{
            scale: sacleProgress,
            opacity: opacityProgress
        }}
        className='  flex min-h-screen flex-col gap-8 items-center justify-center '>
        
            <h1 className='mx-8 text-4xl lg:text-5xl lg:w-8/12 text-center z-50'>
                Unlock AI&apos;s potential for your business. Drop your email; let&apos;s explore together.
            </h1>

            <div className='z-50'>
                <FormsparkEmailCapture />
            </div>

            <ParticlesContainer />

    </motion.section>
  )
}

export default HeroSection
