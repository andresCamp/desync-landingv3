'use client'
import React, { useEffect, useRef } from 'react'
import {motion, useAnimation, useInView, useMotionValueEvent, useScroll} from "framer-motion"

const TitleSection = () => {

    const ref = useRef<HTMLHeadingElement>(null)
    const isInView = useInView(ref, {once: true})

    const mainControls = useAnimation()

    useEffect(()=> {
        if (isInView){
            mainControls.start("visible")
        }
    }, [isInView])

    const { scrollY } = useScroll()

    // useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest)
    // })


    // const { scrollYProgress} = useScroll({
    //     target: ref,
    //     offset: ["0 1" ,"1 0"]
    // })

  return (
    <div className='mt-36'>
       
       <motion.h1 className='text-6xl w-full' 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
            
        >
            Step into an era where AI reshapes the boundaries of what&apos;s possible. 
            
         </motion.h1>
       {/* <motion.h1 className='text-6xl w-full' 
            ref={ref} 
            variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1},
                again: {opacity: 0},

            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25}}
            
        >
            Step into an era where AI reshapes the boundaries of what&apos;s possible. 
            
         </motion.h1> */}

{/*        
        <motion.h1 className='text-6xl w-3/4' 
            ref={ref} 
            variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1},

            }}
        >
        Step into an era where AI reshapes the boundaries of what&apos;s possible.
        </motion.h1> */}

        {/* <motion.h1 className='text-6xl w-3/4' 
            ref={ref} 
            style={{
                // scale: scrollYProgress,
                opacity: scrollYProgress
            }}
        >
        Step into an era where AI reshapes the boundaries of what&apos;s possible.
        </motion.h1> */}
        
        <motion.h1 className='text-6xl w-3/4' 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.25 }}
        >
        With us, your ambition isn&apos;t just an aspiration—it&apos;s your greatest capital. 
        </motion.h1>

        <motion.h1 className='text-6xl w-3/4' 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 2, delay: 0.25 }}
        >
          We&apos;re not just implementing technology; we&apos;re leveling the playing field for every organization.
        </motion.h1>

        {/* <motion.div 
            className='bg-indigo-700 w-64 h-64 rounded-2xl'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
        ></motion.div> */}


        {/* <motion.div
        className='w-64 h-64 bg-indigo-600'
        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        /> */}
      






    </div>
  )
}

export default TitleSection



{/* 
<motion.h1 className='text-6xl w-3/4' 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 5 }}
>
Step into an era where AI reshapes the boundaries of what's possible. With us, your ambition isn't just an aspiration—it's your greatest capital. We're not just implementing technology; we're leveling the playing field for every organization.
</motion.h1> */}