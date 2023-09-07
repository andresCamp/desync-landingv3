'use client'
import React from 'react'
import {motion} from "framer-motion"

const TitleSection = () => {
  return (
    <div>
        <motion.h1 className='text-6xl w-3/4' 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
        Step into an era where AI reshapes the boundaries of what's possible.
        </motion.h1>
        
        <motion.h1 className='text-6xl w-3/4' 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
        With us, your ambition isn't just an aspiration—it's your greatest capital. 
        </motion.h1>

        <motion.h1 className='text-6xl w-3/4' 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 2 }}
        >
          We're not just implementing technology; we're leveling the playing field for every organization.
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