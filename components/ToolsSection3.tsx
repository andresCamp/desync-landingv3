'use client'
import React, { useRef } from 'react'
import LogoLine from './LogoLine'
import LogoLine2 from './LogoLine2'
import LogoLine3 from './LogoLine3'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const ToolsSection = () => {
  const ref = useRef<HTMLDivElement>(null)
  // const rightRef = useRef<HTMLDivElement>(null)
  // const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"})

  const {scrollYProgress} = useScroll({
    target: ref,
  })

  const xLeft = useTransform(scrollYProgress, [1, .7], ["0%", "-100%"]) 
  // const xRight = useTransform(scrollYProgress, [0.75, 1], ["0%", "100%"])
  
  // const x = xLeft
  // const xR = xRight.get()

  // const x = isLeft ? xLeft : xRight

  const x = xLeft

  return (
    <motion.div className="mb-24 relative bg-[#3d3d3d]"
>

      {/* sticky text */}
      {/* <div className='sticky top-1/2 transform -translate-y-1/2 z-40'>
        <div className=" p-4 md:px-8 w-full sm:w-max bg-black flex items-center justify-center absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2 ring-8 ring-opacity-75 ring-white rounded-md">
          <h3 className="text-xl md:text-2xl lg:text-4xl text-blue-400">
            We&apos;ve tested hundreds of tools so you dont have to.
          </h3>
        </div>
      </div> */}
      
      <div className=" p-4 md:px-8 w-full sm:w-max bg-black flex items-center justify-center absolute top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2 ring-8 ring-opacity-75 ring-white rounded-md">
        <h3 className="text-xl md:text-2xl lg:text-4xl text-blue-400">
          We&apos;ve tested hundreds of tools so you dont have to.
        </h3>
      </div>


      
      {/* <motion.div
        ref={ref}
        style={{xLeft.get()}}
      >
      </motion.div> */}
      
      <div className=''>
        <motion.div
          ref={ref}
          style={{x}}
        >
          <LogoLine3
            start={1}
            end={7}
          />
        </motion.div>
        
        <motion.div
          ref={ref}
          style={{x}}
        >
          <LogoLine3
            start={8}
            end={14}
          />
        </motion.div>
        
        <motion.div
          ref={ref}
          style={{x}}
        >
          <LogoLine3
            start={15}
            end={24}
          />
        </motion.div>
        
        <motion.div
          ref={ref}
          style={{x}}
        >
          <LogoLine3
            start={25}
            end={32}
          />
        </motion.div>
      </div>

      
      {/* <motion.div
        ref={ref}
        style={{xRight.get()}}
      >
      </motion.div> */}



        {/* <LogoLine2
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
        /> */}

        {/* <div className='h-screen bg-blue-700'></div> */}
        {/* <div className='h-screen bg-blue-700'></div> */}

    </motion.div>
  )
}

export default ToolsSection
