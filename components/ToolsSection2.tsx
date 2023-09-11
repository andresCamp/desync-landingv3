'use client'
import React, { useRef } from 'react'
import LogoLine2 from './LogoLine2'
import { motion, useInView } from 'framer-motion'

const ToolsSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"})

  return (
    <motion.div className=" my-64 relative"
>

      <div className="p-4 md:px-8 w-full sm:w-max bg-black flex items-center justify-center absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2 ring-8 ring-opacity-75 ring-white rounded-md">
        <h3 className="text-xl md:text-2xl lg:text-4xl text-blue-400">
          We&apos;ve tested hundreds of tools so you dont have to.
        </h3>
      </div>
      

        <LogoLine2
          isLeft={true}
          start={1}
          end={7}
        />


        <LogoLine2
          isLeft={false}
          start={26}
          end={36}
        />
        <LogoLine2
          isLeft={true}
          start={7}
          end={18}
        />
        <LogoLine2
          isLeft={false}
          start={12}
          end={18}
        />

        <LogoLine2
          isLeft={true}
          start={1}
          end={7}
        />

        <LogoLine2
          isLeft={false}
          start={15}
          end={26}
        />
        <LogoLine2
          isLeft={true}
          start={20}
          end={32}
        />
        <LogoLine2
          isLeft={false}
          start={26}
          end={36}
        />
    </motion.div>
  )
}

export default ToolsSection
