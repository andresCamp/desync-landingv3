'use client'
import React, { useRef } from 'react'
import LogoLine from './LogoLine'
import { motion, useInView } from 'framer-motion'

const ToolsSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"})

  return (
    <motion.div className=" my-64 relative"
    ref={ref}
    initial={{ opacity: 0 }} 
    animate={{ opacity: isInView ? 1 : 0 }}
    transition={{duration: 2 }}>

      <div className="p-4 md:px-8 w-full sm:w-max bg-black flex items-center justify-center absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2 ring-8 ring-opacity-75 ring-white rounded-md">
        <h3 className="text-xl md:text-2xl lg:text-4xl text-blue-400">
          We&apos;ve tested hundreds of tools so you dont have to.
        </h3>
      </div>
      
   
        <LogoLine
          start={1}
          end={7}
        />
        <LogoLine
          start={26}
          end={36}
        />
        <LogoLine
          start={7}
          end={18}
        />
        <LogoLine
          start={12}
          end={18}
        />

        <LogoLine
          start={1}
          end={7}
        />

        <LogoLine
          start={15}
          end={26}
        />
        <LogoLine
          start={20}
          end={32}
        />
        <LogoLine
          start={26}
          end={36}
        />
    </motion.div>
  )
}

export default ToolsSection
